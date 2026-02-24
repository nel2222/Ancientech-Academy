export type UserRole = 'admin' | 'student'

export type PaymentType = 'ONE_TIME' | 'SUBSCRIPTION'

export type PaymentStatus = 'PENDING' | 'PARTIAL_PAID' | 'FULL_PAID' | 'FAILED'

export type EnrollmentStatus = 'PENDING' | 'ENROLLED' | 'CERTIFICATE_ELIGIBLE'

export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  user_id: string
  full_name: string
  phone: string | null
  avatar_url: string | null
  role: UserRole
  created_at: string
  updated_at: string
}

export interface Course {
  id: string
  title: string
  description: string
  price: number
  category: 'AI_SECURITY' | 'CYBERSECURITY' | 'WEB3_SECURITY'
  features: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Enrollment {
  id: string
  user_id: string
  course_id: string
  payment_type: PaymentType
  total_amount: number
  amount_paid: number
  payment_status: PaymentStatus
  enrollment_status: EnrollmentStatus
  subscription_id: string | null
  next_payment_date: string | null
  created_at: string
  updated_at: string
}

export interface Payment {
  id: string
  enrollment_id: string
  user_id: string
  amount: number
  payment_method: string
  paystack_reference: string
  status: 'SUCCESS' | 'FAILED' | 'PENDING'
  metadata: any
  created_at: string
}

export interface Testimonial {
  id: string
  student_name: string
  student_role: string
  content: string
  rating: number
  avatar_url: string | null
  is_approved: boolean
  created_at: string
}

export interface OutreachProgram {
  id: string
  title: string
  description: string
  location: string
  event_date: string
  event_type: 'PAST' | 'UPCOMING'
  image_url: string | null
  registration_link: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface OutreachRegistration {
  id: string
  program_id: string
  full_name: string
  email: string
  phone: string
  institution: string | null
  created_at: string
}
