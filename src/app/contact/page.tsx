"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-electric-teal/10 via-transparent to-cyber-violet/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CONTACT US</h1>
            <p className="text-lg text-light-gray">
              Have questions about training, services, or partnerships? Send us a message and we’ll respond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  This form is for preview. We’ll connect it to email/Supabase later.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="David Alofokhai" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Training inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us what you need…" rows={5} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="rounded-lg border border-electric-teal/20 bg-dark-slate p-6">
                <h3 className="font-semibold mb-4">Contact Details</h3>
                <ul className="space-y-3 text-sm text-light-gray">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-electric-teal" />
                    <span>info@ancientech.academy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-electric-teal" />
                    <span>+234 XXX XXX XXXX</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-electric-teal" />
                    <span>Lagos, Nigeria</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-electric-teal/20 bg-dark-slate p-6">
                <h3 className="font-semibold mb-3">Looking for Training?</h3>
                <p className="text-sm text-light-gray mb-4">
                  View programs and pricing, then reach out for enrollment help.
                </p>
                <Link href="/training">
                  <Button variant="outline" className="w-full">
                    GO TO TRAINING
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

