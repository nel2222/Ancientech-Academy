import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-electric-teal/20 bg-deep-void/95 backdrop-blur supports-[backdrop-filter]:bg-deep-void/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
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

        <div className="flex items-center space-x-4">
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
      </div>
    </header>
  )
}
