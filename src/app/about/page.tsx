"use client"

import Link from "next/link"
import { ShieldCheck, Users, Target, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

const values = [
  {
    title: "Mission",
    description:
      "Equip learners and teams with practical, modern cybersecurity skills—built for the realities of today’s threats.",
    icon: Target,
  },
  {
    title: "Community",
    description:
      "A supportive environment that helps you stay consistent, build projects, and grow with accountability.",
    icon: Users,
  },
  {
    title: "Quality",
    description:
      "Hands-on training, real-world scenarios, and clear learning paths—so progress is measurable and career-focused.",
    icon: ShieldCheck,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-cyber-violet/10 via-transparent to-electric-teal/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-light-gray">
              Ancientech Academy is a cybersecurity education platform focused on practical skills, clear roadmaps,
              and community support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="rounded-lg border border-electric-teal/20 bg-dark-slate p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-electric-teal/10">
                    <Icon className="h-6 w-6 text-electric-teal" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-light-gray">{v.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/training">
              <Button size="lg" className="px-8 glow-teal">
                Explore Training
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

