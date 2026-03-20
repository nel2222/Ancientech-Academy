"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-electric-teal/20 bg-deep-void/95 backdrop-blur supports-[backdrop-filter]:bg-deep-void/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobile}>
          <Image
            src="/logo.png"
            alt="Ancientech Academy logo"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-xl font-bold">
            <span className="text-electric-teal">Ancientech</span> Academy
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/training" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            Training
          </Link>
          <Link 
            href="/cyber-awakening" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            CyberAwakening
          </Link>
          <Link 
            href="/services" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-electric-teal/20 bg-deep-void/95 backdrop-blur supports-[backdrop-filter]:bg-deep-void/80">
          <div className="container py-4">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors py-2"
                onClick={closeMobile}
              >
                Home
              </Link>
              <Link
                href="/training"
                className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors py-2"
                onClick={closeMobile}
              >
                Training
              </Link>
              <Link
                href="/cyber-awakening"
                className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors py-2"
                onClick={closeMobile}
              >
                CyberAwakening
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors py-2"
                onClick={closeMobile}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors py-2"
                onClick={closeMobile}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors py-2"
                onClick={closeMobile}
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-electric-teal/20 flex flex-col gap-3">
              <Link href="/auth/login" onClick={closeMobile}>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup" onClick={closeMobile}>
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
