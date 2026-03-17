"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PricingSection } from "@/components/sections/pricing-section"
import { Button } from "@/components/ui/button"

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-20 bg-gradient-to-br from-cyber-violet/10 via-transparent to-electric-teal/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TRAINING PROGRAMS
            </h1>
            <p className="text-lg text-light-gray mb-8">
              Explore our structured training paths designed to take you from fundamentals to job-ready skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#training-options">
                <Button size="lg" className="text-base px-8 glow-teal">
                  View Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-base px-8">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="training-options">
        <PricingSection />
      </div>

      <section className="py-16 bg-dark-slate/30">
        <div className="container">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-electric-teal/20 bg-dark-slate p-6">
              <h3 className="font-semibold mb-2">Flexible Learning</h3>
              <p className="text-sm text-light-gray">
                Learn at your pace with guided milestones, exercises, and resources.
              </p>
            </div>
            <div className="rounded-lg border border-electric-teal/20 bg-dark-slate p-6">
              <h3 className="font-semibold mb-2">Hands-on Practice</h3>
              <p className="text-sm text-light-gray">
                Build skills through practical labs and real-world scenarios.
              </p>
            </div>
            <div className="rounded-lg border border-electric-teal/20 bg-dark-slate p-6">
              <h3 className="font-semibold mb-2">Career Support</h3>
              <p className="text-sm text-light-gray">
                Get guidance on portfolios, interview prep, and job readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

