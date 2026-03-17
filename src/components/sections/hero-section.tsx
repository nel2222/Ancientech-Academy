import Link from "next/link"
import { ArrowRight, Shield, Lock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-violet/10 via-transparent to-electric-teal/10" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-dark-slate border border-electric-teal/30">
            <Shield className="h-4 w-4 text-electric-teal" />
            <span className="text-sm text-light-gray">
              Professional Cybersecurity Training
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Master the Art of
            <span className="block text-electric-teal mt-2">
              Cybersecurity
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-light-gray max-w-2xl mx-auto">
            Join Ancientech Academy and become a certified security professional. 
            Specialized training in AI Security, Cybersecurity, and Web3 Security.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/training">
              <Button size="lg" className="text-base px-8 glow-teal">
                Explore Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cyber-awakening">
              <Button size="lg" variant="outline" className="text-base px-8">
                Join Cyber Awakening
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-dark-slate/50 border border-electric-teal/10">
              <div className="p-3 rounded-full bg-electric-teal/10">
                <Shield className="h-6 w-6 text-electric-teal" />
              </div>
              <h3 className="font-semibold">Industry Expert</h3>
              <p className="text-sm text-light-gray text-center">
                Learn from certified professionals with real-world experience
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-dark-slate/50 border border-electric-teal/10">
              <div className="p-3 rounded-full bg-cyber-violet/10">
                <Lock className="h-6 w-6 text-cyber-violet" />
              </div>
              <h3 className="font-semibold">Hands-on Training</h3>
              <p className="text-sm text-light-gray text-center">
                Practical labs and real-world scenarios for effective learning
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-dark-slate/50 border border-electric-teal/10">
              <div className="p-3 rounded-full bg-electric-teal/10">
                <Globe className="h-6 w-6 text-electric-teal" />
              </div>
              <h3 className="font-semibold">Career Support</h3>
              <p className="text-sm text-light-gray text-center">
                Job placement assistance and industry connections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
