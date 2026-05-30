"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Facebook, Linkedin } from "lucide-react"

const practiceAreas = [
  { label: "Real Estate Law", href: "/services/real-estate" },
  { label: "Corporate & Commercial Law", href: "/services/corporate-commercial" },
  { label: "Estate Planning & Wills", href: "/services/estate-planning" },
  { label: "Family Law", href: "/services/family-law" },
]

// X (Twitter) logo SVG
function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo and About */}
          <div>
            <Link href="/">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Tomi Law Office Logo"
                  width={60}
                  height={60}
                  style={{ width: "auto", height: "60px" }}
                />
                <div className="text-white text-2xl font-semibold tracking-wider ml-2">TOMI LAW OFFICE</div>
              </div>
            </Link>
            <div className="text-gray-300 text-sm mb-6">
              <p className="mb-3">
                At Tomi Law Office, our goal is to provide efficient and affordable legal services. We take the time to
                listen to our clients, understand their needs and offer practical solutions to their individual or
                corporate needs.
              </p>
            </div>
          </div>

          {/* Offices + Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Offices</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white font-medium">
                  Tisdale
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white font-medium">
                  Nipawin
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+13068734521" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Tisdale: 306-873-4521
                </a>
              </li>
              <li>
                <a href="tel:+13068624511" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Nipawin: 306-862-4511
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => {
                const isActive = pathname === area.href
                return (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className={`hover:text-white transition-colors ${
                        isActive
                          ? "text-white font-bold underline underline-offset-2"
                          : "text-gray-300 font-medium"
                      }`}
                    >
                      {area.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Follow Us + Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/tomilawoffice"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/tomi-law-office"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://x.com/tomilawoffice"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-8">
              Member - Canadian Bar Association
            </p>

            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <div className="mb-4">
              <Link
                href="/contact"
                className="inline-block bg-[#1E72C8] text-white px-6 py-3 font-medium hover:bg-[#6BBFEA] transition-colors w-full sm:w-auto text-center"
              >
                Subscribe
              </Link>
            </div>
            <p className="text-gray-300 font-medium text-sm">
              Subscribe to Tomi Law Office's newsletter for legal updates and information.
            </p>
          </div>
        </div>

        <hr className="border-t border-[#D8E6F3] my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Tomi Law Office. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium">
            <Link href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="#disclaimer" className="text-gray-400 hover:text-white">Disclaimer</Link>
            <Link href="#terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="#accessibility" className="text-gray-400 hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
