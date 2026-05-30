"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const faqs = [
  {
    q: "Do I need a lawyer for a real estate transaction in Saskatchewan?",
    a: "Yes. In Saskatchewan, a lawyer is required to complete most real estate transactions, including purchases, sales, and mortgage registrations. A lawyer ensures the transfer of title is properly completed, funds are handled correctly, and legal requirements are met.",
  },
  {
    q: "When should I contact a lawyer during a real estate transaction?",
    a: "You should contact a lawyer as soon as an offer is accepted or when refinancing or transferring property. Early involvement allows legal issues to be identified and addressed before deadlines or complications arise.",
  },
  {
    q: "What does a real estate lawyer do for a buyer?",
    a: "A real estate lawyer assists with reviewing the purchase contract, conducting title searches, preparing transfer documents, registering title, coordinating with lenders, and ensuring funds are properly received and disbursed.",
  },
  {
    q: "What does a real estate lawyer do for a seller?",
    a: "For sellers, a lawyer prepares transfer documents, discharges existing mortgages, coordinates with the buyer's lawyer, ensures funds are properly received, and completes the title transfer.",
  },
  {
    q: "What is a title search and why is it important?",
    a: "A title search confirms ownership of the property and identifies registered interests such as mortgages, liens, easements, or rights-of-way. This helps ensure there are no unexpected issues affecting the property.",
  },
  {
    q: "Can you help with private sales or family transfers?",
    a: "Yes. We regularly assist with private real estate sales and transfers between family members, including spousal transfers, estate-related transfers, and gifts of property.",
  },
  {
    q: "Do all real estate transactions require title insurance?",
    a: "Title insurance is not mandatory but may be recommended depending on the transaction and lender requirements. We can advise whether title insurance is appropriate for your situation.",
  },
  {
    q: "How long does a real estate transaction take?",
    a: "Timelines vary depending on the transaction type and financing. Most residential purchases and sales are completed within several weeks once financing and conditions are satisfied.",
  },
  {
    q: "What costs are involved in a real estate transaction?",
    a: "Costs may include legal fees, land titles fees, title insurance (if applicable), adjustments, and disbursements. We provide clear information about expected costs at the outset of your transaction.",
  },
  {
    q: "Do you handle farmland and agricultural real estate transactions?",
    a: "Yes. We assist with farmland purchases and sales, agricultural leases, family farm transfers, and registration of easements and land interests.",
  },
  {
    q: "What happens if there is an issue with title or closing?",
    a: "If an issue arises, your lawyer works to resolve it before closing. This may involve correcting title defects, obtaining lender approvals, or negotiating solutions to keep the transaction on track.",
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

export default function RealEstatePage() {
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
            Real Estate Law
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Real estate transactions are significant financial and personal decisions. At Tomi Law Office, we provide
              knowledgeable and efficient legal support to help ensure your transaction proceeds smoothly, accurately,
              and on time.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              We represent purchasers, vendors, lenders, landlords, and tenants across Saskatchewan in a wide range of
              residential, commercial, and agricultural real estate matters. Our experienced team works closely with
              clients, realtors, lenders, and other professionals to manage each transaction with care and attention to
              detail.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              We understand the importance of timing, accuracy, and clear communication in real estate matters. Our goal
              is to identify issues early, manage risk, and provide practical legal solutions that protect your interests
              throughout the transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-8">Our Real Estate Legal Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-base font-semibold text-[#002548] mb-3 pb-2 border-b-2 border-[#d4a017]">
                  Residential Real Estate
                </h3>
                <ul className="space-y-2">
                  {[
                    "Purchase and sale of residential properties",
                    "Mortgage financing and refinancing",
                    "Title searches and registrations",
                    "Transfers between spouses, family members, or related parties",
                    "Private sales and estate-related transfers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#002548] mb-3 pb-2 border-b-2 border-[#d4a017]">
                  Commercial Real Estate
                </h3>
                <ul className="space-y-2">
                  {[
                    "Purchase and sale of commercial properties",
                    "Commercial mortgage financing",
                    "Commercial lease agreements",
                    "Business-related property transactions",
                    "Due diligence and title review",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#002548] mb-3 pb-2 border-b-2 border-[#d4a017]">
                  Agricultural &amp; Farmland
                </h3>
                <ul className="space-y-2">
                  {[
                    "Farmland purchases and sales",
                    "Agricultural and farm lease agreements",
                    "Transfers of farmland within families",
                    "Easements, rights-of-way, and land interests",
                    "Subdivision and land development matters",
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
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-6">
            Why Choose Tomi Law Office for Real Estate Matters
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Experienced real estate law team",
              "Efficient and timely file management",
              "Clear communication throughout the process",
              "Strong coordination with realtors and lenders",
              "Trusted legal services across Saskatchewan",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 p-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl">
          <div className="mb-10">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Common Questions</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Real Estate FAQ</h2>
            <div className="w-16 h-1 bg-[#d4a017]"></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Buying, selling, or refinancing property involves important legal steps. The following answers address
            common questions we receive from clients regarding real estate transactions in Saskatchewan.
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
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Contact a Real Estate Lawyer</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            If you require legal assistance with a real estate transaction in Saskatchewan, we invite you to contact
            Tomi Law Office to schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4a017] text-white px-8 py-3 font-medium hover:bg-[#c09015] transition-colors"
          >
            Book a Real Estate Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
