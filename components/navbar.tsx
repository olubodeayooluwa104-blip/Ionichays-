"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5 bg-background/85 backdrop-blur-sm border-b border-border">
      <Link href="/" className="font-sans font-bold text-lg tracking-tight text-foreground">
        Oatify<span className="text-primary">media</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <Link href="#services" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="#how" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
        </li>
        <li>
          <Link href="#why" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
            Why Us
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      <Link
        href="#contact"
        className="hidden md:inline-block bg-primary text-primary-foreground font-sans font-semibold text-sm px-5 py-2.5 hover:bg-accent hover:-translate-y-0.5 transition-all"
      >
        Get Started
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            <li>
              <Link
                href="#services"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#how"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#why"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="#contact"
                className="inline-block bg-primary text-primary-foreground font-sans font-semibold text-sm px-5 py-2.5"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
