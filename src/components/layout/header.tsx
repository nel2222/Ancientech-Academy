import Link from "next/link"
import { Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-electric-teal/20 bg-deep-void/95 backdrop-blur supports-[backdrop-filter]:bg-deep-void/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-electric-teal" />
          <span className="text-xl font-bold">
            <span className="text-electric-teal">Ancientech</span> Academy
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/#courses" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            Courses
          </Link>
          <Link 
            href="/cyber-awakening" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            Cyber Awakening
          </Link>
          <Link 
            href="/#testimonials" 
            className="text-sm font-medium text-light-gray hover:text-electric-teal transition-colors"
          >
            Testimonials
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
