"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - will be replaced with real Supabase data
const upcomingEvents = [
  {
    id: 1,
    title: "Cybersecurity Awareness Workshop",
    description: "Introduction to cybersecurity fundamentals and best practices for university students.",
    location: "University of Lagos, Nigeria",
    date: "2024-03-15",
    imageUrl: null,
    spotsLeft: 50
  },
  {
    id: 2,
    title: "Web3 Security Bootcamp",
    description: "Hands-on workshop covering blockchain security and smart contract auditing.",
    location: "Covenant University, Ota",
    date: "2024-04-10",
    imageUrl: null,
    spotsLeft: 30
  }
]

const pastEvents = [
  {
    id: 1,
    title: "AI Security Summit 2024",
    description: "Comprehensive overview of AI security challenges and solutions.",
    location: "Lagos Business School",
    date: "2024-01-20",
    attendees: 120
  },
  {
    id: 2,
    title: "Ethical Hacking Workshop",
    description: "Practical penetration testing workshop for beginners.",
    location: "Yaba College of Technology",
    date: "2023-12-05",
    attendees: 80
  }
]

export default function CyberAwakeningPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: ""
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // TODO: Implement Supabase registration
    console.log("Registration:", formData)
    
    setTimeout(() => {
      setLoading(false)
      alert("Registration successful! We'll contact you with more details.")
      setFormData({ fullName: "", email: "", phone: "", institution: "" })
    }, 1000)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-violet/10 via-transparent to-electric-teal/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-dark-slate border border-electric-teal/30 mb-6">
              <Users className="h-4 w-4 text-electric-teal" />
              <span className="text-sm text-light-gray">Community Outreach Program</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Cyber <span className="text-electric-teal">Awakening</span>
            </h1>
            
            <p className="text-lg text-light-gray">
              Bringing cybersecurity awareness and education to universities across Nigeria. 
              Join our free workshops and events to kickstart your security journey.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="upcoming" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="flex flex-col">
                    <CardHeader>
                      <div className="h-48 rounded-lg bg-gradient-to-br from-electric-teal/20 to-cyber-violet/20 mb-4 flex items-center justify-center">
                        <Shield className="h-16 w-16 text-electric-teal" />
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-light-gray">
                          <Calendar className="h-4 w-4 mr-2 text-electric-teal" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-light-gray">
                          <MapPin className="h-4 w-4 mr-2 text-electric-teal" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-light-gray">
                          <Users className="h-4 w-4 mr-2 text-electric-teal" />
                          {event.spotsLeft} spots remaining
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="opacity-75">
                    <CardHeader>
                      <div className="h-48 rounded-lg bg-gradient-to-br from-electric-teal/10 to-cyber-violet/10 mb-4 flex items-center justify-center">
                        <Shield className="h-16 w-16 text-electric-teal/50" />
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-light-gray">
                          <Calendar className="h-4 w-4 mr-2 text-electric-teal" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-light-gray">
                          <MapPin className="h-4 w-4 mr-2 text-electric-teal" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-light-gray">
                          <Users className="h-4 w-4 mr-2 text-electric-teal" />
                          {event.attendees} attendees
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-to-b from-dark-slate/30 to-deep-void">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Register Your Interest</CardTitle>
                <CardDescription>
                  Sign up to receive notifications about upcoming events in your area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution (Optional)</Label>
                    <Input
                      id="institution"
                      type="text"
                      placeholder="University of Lagos"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? "Submitting..." : "Register Interest"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
