import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const paystackSecretKey = Deno.env.get('PAYSTACK_SECRET_KEY')
    const signature = req.headers.get('x-paystack-signature')
    
    // Verify webhook signature
    const body = await req.text()
    const hash = await crypto.subtle.digest(
      'SHA-512',
      new TextEncoder().encode(paystackSecretKey + body)
    )
    const hashArray = Array.from(new Uint8Array(hash))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    
    if (hashHex !== signature) {
      return new Response(
        JSON.stringify({ error: 'Invalid signature' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const payload = JSON.parse(body)
    const event = payload.event
    const data = payload.data

    // Handle successful payment
    if (event === 'charge.success') {
      const reference = data.reference
      const amount = data.amount / 100 // Paystack amounts are in kobo
      const email = data.customer.email

      // Find the user by email
      const { data: profile, error: profileError } = await supabaseClient
        .from('profiles')
        .select('id')
        .eq('email', email)
        .single()

      if (profileError || !profile) {
        throw new Error('User not found')
      }

      // Get the enrollment
      const { data: enrollment, error: enrollmentError } = await supabaseClient
        .from('enrollments')
        .select('*')
        .eq('user_id', profile.id)
        .eq('payment_status', 'PENDING')
        .single()

      if (enrollmentError || !enrollment) {
        throw new Error('Enrollment not found')
      }

      // Create payment record
      const { error: paymentError } = await supabaseClient
        .from('payments')
        .insert({
          enrollment_id: enrollment.id,
          user_id: profile.id,
          amount: amount,
          paystack_reference: reference,
          status: 'SUCCESS',
          metadata: data
        })

      if (paymentError) {
        throw paymentError
      }

      // Update enrollment
      const newAmountPaid = enrollment.amount_paid + amount
      const paymentStatus = newAmountPaid >= enrollment.total_amount ? 'FULL_PAID' : 'PARTIAL_PAID'
      const enrollmentStatus = paymentStatus === 'FULL_PAID' ? 'CERTIFICATE_ELIGIBLE' : 'ENROLLED'

      const { error: updateError } = await supabaseClient
        .from('enrollments')
        .update({
          amount_paid: newAmountPaid,
          payment_status: paymentStatus,
          enrollment_status: enrollmentStatus
        })
        .eq('id', enrollment.id)

      if (updateError) {
        throw updateError
      }

      // TODO: Send confirmation email

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ message: 'Event not handled' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
