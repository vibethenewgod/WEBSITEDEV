"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const faqs = [
  {
    q: "What does \"non-contentious family law\" mean?",
    a: "Non-contentious family law focuses on resolving family matters through planning and agreement rather than court proceedings. This includes prenuptial agreements, cohabitation agreements, and separation agreements where parties are seeking clarity and resolution.",
  },
  {
    q: "Do I need a lawyer for a prenuptial or cohabitation agreement?",
    a: "Yes. For these agreements to be legally enforceable, each party should receive independent legal advice. A lawyer ensures the agreement is properly drafted, reflects your intentions, and complies with Saskatchewan law.",
  },
  {
    q: "When should a prenuptial agreement be prepared?",
    a: "A prenuptial agreement should be prepared well in advance of a wedding. Last-minute agreements may be challenged later. Early planning allows for proper disclosure, thoughtful discussion, and informed decision-making.",
  },
  {
    q: "What is the difference between a prenuptial and a cohabitation agreement?",
    a: "A prenuptial agreement is prepared before marriage, while a cohabitation agreement applies to couples living together but not married. Both agreements address property, debt, and financial responsibilities.",
  },
  {
    q: "What is a separation agreement?",
    a: "A separation agreement is a legally binding document that sets out the terms of a separation. It can address property division, support, parenting arrangements, and other financial matters without the need for court involvement.",
  },
  {
    q: "Do we have to go to court to separate?",
    a: "No. Many couples resolve separation issues through a separation agreement without going to court. Court proceedings are generally only necessary if parties cannot reach an agreement.",
  },
  {
    q: "Can a separation agreement include parenting arrangements?",
    a: "Yes. Separation agreements often include parenting terms, including decision-making responsibilities and parenting schedules, provided they reflect the best interests of the children.",
  },
  {
    q: "Can a family law agreement be changed later?",
    a: "Some agreements may be amended if circumstances change, but changes must be properly documented and legally valid. It is important to seek legal advice before relying on informal changes.",
  },
  {
    q: "What information is needed to prepare a family law agreement?",
    a: "Full financial disclosure is essential. This may include income information, assets, debts, and property details. Proper disclosure helps ensure the agreement is fair and enforceable.",
  },
  {
    q: "How long does it take to prepare an agreement?",
    a: "Timelines vary depending on complexity and cooperation between parties. Many agreements can be completed within several weeks once information is provided and terms are agreed upon.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="text-gray-800 font-medium text-sm leading-snug">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#d4a017] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-gray-600 text-sm leading-relaxed">{answer}</div>
      )}
    </div>
  )
}

export default function FamilyLawPage() {
  return (
    <>
      <div className="bg-[#002548]">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="bg-[#002548] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-3xl">
            Family Law (Non-Contentious)
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Family law matters often involve significant personal and financial decisions. At Tomi Law Office, we
            provide respectful, practical, and solution-focused legal support to help clients navigate family
            transitions with clarity and confidence.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Our family law services focus on non-contentious matters, where cooperation, planning, and clear agreements
            can help reduce conflict and provide long-term certainty.
          </p>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <div className="space-y-10">

            {/* Prenuptial */}
            <div>
              <h2 className="text-xl font-semibold text-[#002548] mb-2 pb-2 border-b-2 border-[#d4a017] inline-block">
                Prenuptial &amp; Cohabitation Agreements
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">
                Prenuptial and cohabitation agreements allow couples to clearly define financial expectations and
                property rights before marriage or cohabitation. These agreements can help protect assets, manage
                risk, and reduce uncertainty should the relationship end.
              </p>
              <p className="text-gray-600 text-sm font-semibold mb-3">We assist clients with:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Prenuptial agreements",
                  "Cohabitation agreements",
                  "Review and independent legal advice",
                  "Asset and debt protection planning",
                  "Business and inheritance considerations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                Well-drafted agreements provide transparency and peace of mind while supporting healthy financial
                planning.
              </p>
            </div>

            {/* Separation */}
            <div>
              <h2 className="text-xl font-semibold text-[#002548] mb-2 pb-2 border-b-2 border-[#d4a017] inline-block">
                Separation Agreements
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">
                Separation agreements allow separating spouses or partners to resolve matters without going to court.
                These agreements set out clear terms and provide certainty moving forward.
              </p>
              <p className="text-gray-600 text-sm font-semibold mb-3">
                We assist with drafting and reviewing separation agreements addressing:
              </p>
              <ul className="space-y-2">
                {[
                  "Division of property and assets",
                  "Child and spousal support",
                  "Parenting arrangements",
                  "Debt allocation",
                  "Estate and beneficiary considerations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-6">Our Approach</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            We understand that family law matters require sensitivity, discretion, and practical guidance. Our approach
            emphasizes:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Clear legal advice",
              "Thoughtful drafting",
              "Focus on resolution rather than conflict",
              "Respect for family dynamics and long-term implications",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 p-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-6">
            Our goal is to help clients reach fair and workable agreements while minimizing conflict and future
            disputes. Where appropriate, we work collaboratively with other professionals to support durable and
            informed outcomes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl">
          <div className="mb-10">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Common Questions</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Family Law FAQ</h2>
            <div className="w-16 h-1 bg-[#d4a017]"></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Family law matters often involve important personal and financial decisions. The following questions address
            common concerns for clients seeking advice on agreements and family-related planning.
          </p>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002548] py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Speak With Our Team</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            If you are considering a prenuptial agreement, separation agreement, or require advice on a
            non-contentious family law matter, we invite you to contact our office to schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4a017] text-white px-8 py-3 font-medium hover:bg-[#c09015] transition-colors"
          >
            Book a Family Law Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
