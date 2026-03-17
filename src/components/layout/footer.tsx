import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-electric-teal/20 bg-dark-slate">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Ancientech Academy logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="font-bold">
                <span className="text-electric-teal">Ancientech</span> Academy
              </span>
            </div>
            <p className="text-sm text-light-gray">
              Professional cybersecurity education for the next generation of security professionals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-light-gray">
              <li>
                <Link href="/#courses" className="hover:text-electric-teal transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/cyber-awakening" className="hover:text-electric-teal transition-colors">
                  Cyber Awakening
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-electric-teal transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-electric-teal transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm text-light-gray">
              <li>AI Security</li>
              <li>Cybersecurity</li>
              <li>Web3 Security</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-light-gray">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ancientech.academy</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-electric-teal/20 text-center text-sm text-light-gray">
          <p>&copy; {new Date().getFullYear()} Ancientech Academy. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-electric-teal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-electric-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
