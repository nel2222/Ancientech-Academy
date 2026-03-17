import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { XLogo } from "@/components/icons/x-logo"

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
                <Link href="/training" className="hover:text-electric-teal transition-colors">
                  Training
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
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Training</h3>
            <ul className="space-y-2 text-sm text-light-gray">
              <li>AI Security</li>
              <li>Cyber Awakening</li>
              <li>Web3 Security</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-light-gray">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@ancientechacademy.org"
                  className="hover:text-electric-teal transition-colors"
                >
                  info@ancientechacademy.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+2348126758544</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Edo, Nigeria</span>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580270784903"
                target="_blank"
                rel="noreferrer"
                className="text-light-gray hover:text-electric-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ancientechcyber?t=Q1UhhVbBgHdFYGwOAm4FDw&s=09"
                target="_blank"
                rel="noreferrer"
                className="text-light-gray hover:text-electric-teal transition-colors"
                aria-label="X"
              >
                <XLogo className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ancientechcyber?igsh=MjYwcjJ2ZjVyc2I0"
                target="_blank"
                rel="noreferrer"
                className="text-light-gray hover:text-electric-teal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ancienttech-cybersecurity-academy/"
                target="_blank"
                rel="noreferrer"
                className="text-light-gray hover:text-electric-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
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
