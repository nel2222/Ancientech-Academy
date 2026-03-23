"use client"

import Link from "next/link"
import { ShieldCheck, Users, Target, ArrowRight, Eye, Heart, MapPin } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

const values = [
  {
    title: "Vision",
    description: "Empower ethical hackers, AI defenders, and decentralized builders.",
    icon: Eye,
  },
  {
    title: "Mission",
    description: "Deliver practical-first education tailored for Africa's digital future.",
    icon: Target,
  },
  {
    title: "Community",
    description: "A supportive environment that helps you stay consistent, build projects, and grow with accountability.",
    icon: Users,
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
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-electric-teal/5 via-transparent to-cyber-violet/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-electric-teal/10 mb-6">
                <MapPin className="h-6 w-6 text-electric-teal" />
              </div>
            </div>
            
            <div className="rounded-lg border border-electric-teal/20 bg-dark-slate p-8 md:p-12">
              <div className="space-y-6 text-light-gray">
                <p className="text-lg leading-relaxed">
                  Founded in 2023 in Benin City, Nigeria, Ancientech Academy began with a simple yet powerful vision: 
                  to bridge the gap between theoretical knowledge and practical cybersecurity skills in Africa.
                </p>
                
                <p className="leading-relaxed">
                  Rooted in ethical hacking foundations, we quickly recognized the evolving digital landscape and the 
                  growing importance of artificial intelligence and Web3 technologies. Our journey from a focused 
                  cybersecurity training center to a comprehensive digital skills academy reflects our commitment to 
                  staying ahead of technological curves.
                </p>
                
                <p className="leading-relaxed">
                  Today, we stand as a beacon of practical-first education, empowering ethical hackers, AI defenders, 
                  and decentralized builders across the continent. Our curriculum is designed not just to teach, but 
                  to transform learners into practitioners who can confidently navigate and secure Africa's digital future.
                </p>
                
                <div className="pt-6 border-t border-electric-teal/20">
                  <p className="text-center font-semibold text-electric-teal">
                    From Benin City to the Digital Frontier - We're Building Africa's Tech Future, One Ethical Hacker at a Time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="text-center">
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

