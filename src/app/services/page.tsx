"use client"

import Link from "next/link"
import { ShieldCheck, GraduationCap, Briefcase, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Security Training & Upskilling",
    description: "Tailored programs for individuals and teams—beginner to advanced.",
    icon: GraduationCap,
  },
  {
    title: "Security Consulting",
    description: "Help with security posture, policy, and implementation guidance.",
    icon: ShieldCheck,
  },
  {
    title: "Career Mentorship",
    description: "Portfolio review, roadmaps, and interview preparation support.",
    icon: Briefcase,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SERVICES</h1>
            <p className="text-lg text-light-gray">
              Professional support to help you learn faster, build securely, and grow your security career.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="rounded-lg border border-electric-teal/20 bg-dark-slate p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-electric-teal/10">
                    <Icon className="h-6 w-6 text-electric-teal" />
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-light-gray">{s.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="px-8 glow-teal">
                CONTACT US
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

