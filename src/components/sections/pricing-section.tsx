"use client"

import { useState } from "react"
import { Check, Brain, Zap, Blocks } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const courses = [
  {
    id: "cyber-awakening",
    title: "Cyber Awakening",
    description: "An immersive program to sharpen your cyber mindset and practical skills",
    price: 100,
    icon: Zap,
    features: [
      "Beginner-friendly onboarding",
      "Weekly challenges & tasks",
      "Community accountability",
      "Hands-on labs",
      "Portfolio-ready projects",
      "Career guidance & support"
    ],
    popular: true
  },
  {
    id: "ai-security",
    title: "AI Security",
    description: "Master the security challenges of artificial intelligence systems",
    price: 200,
    icon: Brain,
    features: [
      "AI Model Security",
      "Adversarial Machine Learning",
      "Data Poisoning Prevention",
      "Secure AI Development",
      "AI Ethics & Compliance",
      "Real-world AI Security Labs"
    ]
  },
  {
    id: "web3-security",
    title: "Web3 Security",
    description: "Secure the future of decentralized applications",
    price: 100,
    icon: Blocks,
    features: [
      "Smart Contract Auditing",
      "Blockchain Security",
      "DeFi Protocol Security",
      "NFT Security",
      "Wallet Security",
      "Real Web3 Vulnerabilities"
    ]
  }
]

export function PricingSection() {
  const [paymentType, setPaymentType] = useState<"one-time" | "subscription">("one-time")

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-deep-void to-dark-slate/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-electric-teal">Path</span>
          </h2>
          <p className="text-lg text-light-gray mb-8">
            Select your specialization and payment plan. All courses include lifetime access to materials.
          </p>
          
          <Tabs value={paymentType} onValueChange={(v) => setPaymentType(v as any)} className="w-full max-w-md mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="one-time">One-Time Payment</TabsTrigger>
              <TabsTrigger value="subscription">Save & Enroll</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Card 
                key={course.id} 
                className={`relative flex flex-col ${course.popular ? 'border-cyber-violet glow-violet' : ''}`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-cyber-violet text-xs font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto p-3 rounded-full bg-electric-teal/10 mb-4">
                    <Icon className="h-8 w-8 text-electric-teal" />
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {course.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">${course.price}</span>
                    {paymentType === "subscription" && (
                      <span className="text-light-gray text-sm ml-2">/month</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-electric-teal mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-light-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-2">
                  <Button className="w-full" size="lg">
                    {paymentType === "one-time" ? "Enroll Now" : "Start Saving"}
                  </Button>
                  <p className="text-xs text-light-gray text-center">
                    {paymentType === "one-time" 
                      ? "One-time payment, lifetime access" 
                      : "Flexible monthly payments available"}
                  </p>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-light-gray">
            All courses include certificate upon completion and career support
          </p>
        </div>
      </div>
    </section>
  )
}
