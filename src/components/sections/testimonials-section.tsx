import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Adebayo Johnson",
    role: "Security Analyst at TechCorp",
    content: "Ancientech Academy transformed my career. The hands-on approach and expert instructors gave me the skills I needed to land my dream job in cybersecurity.",
    rating: 5,
    avatar: "AJ"
  },
  {
    id: 2,
    name: "Chioma Okafor",
    role: "Penetration Tester",
    content: "The Web3 Security course was incredible. I learned practical skills that I use every day in my work. The community support is outstanding.",
    rating: 5,
    avatar: "CO"
  },
  {
    id: 3,
    name: "Ibrahim Mohammed",
    role: "AI Security Researcher",
    content: "Best investment I've made in my education. The AI Security track covered everything from fundamentals to advanced topics. Highly recommended!",
    rating: 5,
    avatar: "IM"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-electric-teal">Students Say</span>
          </h2>
          <p className="text-lg text-light-gray">
            Join hundreds of successful graduates who have transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-electric-teal/30 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-electric-teal text-electric-teal" />
                  ))}
                </div>

                <p className="text-light-gray mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-electric-teal/20 flex items-center justify-center text-electric-teal font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-light-gray">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
