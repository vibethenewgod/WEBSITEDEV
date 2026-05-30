"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Our Story", href: "/story" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#1A1A1A] text-white py-1 md:py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-white" />
              <span className="hidden md:inline text-xs text-white/70 uppercase">Call</span>
              <a
                href="tel:+13068734521"
                className="text-xs md:text-sm font-medium text-white hover:text-[#6BBFEA] transition-colors"
              >
                306-873-4521
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-white" />
              <span className="hidden md:inline text-xs text-white/70 uppercase">Email</span>
              <a
                href="mailto:info@tomilawoffice.ca"
                className="text-xs md:text-sm font-medium text-white hover:text-[#6BBFEA] transition-colors"
              >
                <span className="hidden md:inline">info@tomilawoffice.ca</span>
                <span className="md:hidden">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 flex-shrink-0 mr-auto -ml-4 md:-ml-6">
              <Image src="/images/logo.png" alt="Tomi Law Office Logo" width={50} height={50} style={{ width: "auto", height: "50px" }} />
              <span className="text-[#1E72C8] text-lg md:text-xl font-serif italic tracking-normal -ml-6">Tomi Law Office</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#6BBFEA] transition-colors font-medium text-base whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#1A1A1A] p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-[#6BBFEA] hover:bg-gray-50 transition-colors font-medium py-2.5 px-2 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
