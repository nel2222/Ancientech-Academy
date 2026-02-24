import { Award, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CertificateSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-slate/30 to-deep-void">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-electric-teal/30 glow-teal">
            <CardContent className="p-12 text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-electric-teal/10 flex items-center justify-center mb-6">
                <Award className="h-10 w-10 text-electric-teal" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Certification
              </h2>

              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-cyber-violet/20 border border-cyber-violet mb-6">
                <Clock className="h-5 w-5 text-cyber-violet" />
                <span className="text-cyber-violet font-semibold">COMING SOON</span>
              </div>

              <p className="text-lg text-light-gray max-w-2xl mx-auto mb-8">
                Upon course completion, you'll receive an industry-recognized certificate 
                that validates your expertise in cybersecurity. Our certification program 
                is currently under development and will be available soon.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 rounded-lg bg-dark-slate/50">
                  <h4 className="font-semibold mb-2">Verified Credentials</h4>
                  <p className="text-sm text-light-gray">
                    Blockchain-verified certificates you can share
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-dark-slate/50">
                  <h4 className="font-semibold mb-2">Industry Recognition</h4>
                  <p className="text-sm text-light-gray">
                    Recognized by leading cybersecurity firms
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-dark-slate/50">
                  <h4 className="font-semibold mb-2">Career Advancement</h4>
                  <p className="text-sm text-light-gray">
                    Boost your resume and LinkedIn profile
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
