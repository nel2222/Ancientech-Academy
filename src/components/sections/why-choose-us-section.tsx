"use client"

import { FlaskConical, Code, Globe, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reasons = [
  {
    title: "Hands-on Labs & Real-world Projects",
    description: "Go beyond theory with our immersive lab environment. Practice on real vulnerabilities, work with actual security tools, and build a portfolio of projects that demonstrate your capabilities to employers. Each module includes practical exercises that mirror industry challenges.",
    icon: FlaskConical,
  },
  {
    title: "Modern Tech Stack Curriculum",
    description: "Learn with cutting-edge technologies used in today's tech industry. Our curriculum is built with Next.js for modern web development, Supabase for backend and database management, and Paystack for payment integration - giving you hands-on experience with tools that are in high demand across Africa's tech ecosystem.",
    icon: Code,
  },
  {
    title: "African-centered Accessibility",
    description: "Designed specifically for African learners, our platform considers local infrastructure challenges, payment methods that work in your country, and content that addresses African cybersecurity challenges. Get affordable pricing, flexible payment options, and localized support that understands your context.",
    icon: Globe,
  },
  {
    title: "Community of Ethical Innovators",
    description: "Join a thriving network of African cybersecurity professionals, AI specialists, and Web3 developers. Collaborate on projects, share knowledge, get mentorship, and build connections that will advance your career. Our community is built on ethics, innovation, and mutual growth.",
    icon: Users,
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-electric-teal/5 via-transparent to-cyber-violet/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-electric-teal">Ancientech Academy</span>
          </h2>
          <p className="text-lg text-light-gray">
            We're not just another online academy. We're building Africa's future tech leaders with practical skills, modern tools, and a community that understands your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="border-electric-teal/20 bg-dark-slate hover:border-electric-teal/40 transition-colors duration-300">
                <CardHeader className="pb-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-electric-teal/10 mb-4">
                    <Icon className="h-7 w-7 text-electric-teal" />
                  </div>
                  <CardTitle className="text-xl leading-tight">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-light-gray leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-electric-teal/30 bg-electric-teal/5">
            <div className="h-2 w-2 rounded-full bg-success-green animate-pulse"></div>
            <span className="text-sm font-medium text-light-gray">
              500+ African learners trained • 95% job placement rate • 4.9/5 student satisfaction
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
