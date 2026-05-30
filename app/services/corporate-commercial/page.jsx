"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const corporateFaqs = [
  {
    q: "Do I need a lawyer to start a business in Saskatchewan?",
    a: "While it is possible to register a business without a lawyer, legal advice is strongly recommended. A lawyer can help you choose the appropriate business structure, draft necessary documents, and avoid costly issues later.",
  },
  {
    q: "What type of business structure is right for me?",
    a: "The right structure depends on your goals, risk tolerance, tax considerations, and future plans. Options include sole proprietorships, partnerships, and corporations. We help clients assess these factors and choose the structure that best fits their needs.",
  },
  {
    q: "When should I incorporate?",
    a: "Incorporation may be appropriate if you are expanding, bringing on partners, seeking liability protection, or planning for succession or tax efficiency. We can advise whether incorporation makes sense for your business.",
  },
  {
    q: "Do I need a shareholder or partnership agreement?",
    a: "Yes. Agreements help define rights, responsibilities, decision-making processes, and exit strategies. Clear agreements can prevent disputes and provide stability as your business grows.",
  },
  {
    q: "Can you help with buying or selling a business?",
    a: "Yes. We assist with business acquisitions, asset purchases, share purchases, and related due diligence. Legal advice is critical to understanding risks and structuring the transaction properly.",
  },
  {
    q: "What is corporate maintenance and why is it important?",
    a: "Corporate maintenance includes annual filings, resolutions, and record-keeping. Maintaining proper corporate records is essential for legal compliance and protecting the integrity of the corporation.",
  },
  {
    q: "Can you assist with corporate reorganizations?",
    a: "Yes. We advise on corporate restructurings, amalgamations, continuations, and related transactions to support growth, succession planning, and tax efficiency.",
  },
  {
    q: "Do you assist with extra-provincial corporations?",
    a: "Yes. We help corporations operating outside Saskatchewan with extra-provincial registrations and ongoing compliance requirements.",
  },
  {
    q: "How does corporate planning connect with estate planning?",
    a: "For business owners, corporate and estate planning are closely linked. We help coordinate business succession planning with Wills and estate plans to ensure continuity and long-term protection.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with a broad range of businesses, including family-owned businesses, professional practices, agricultural operations, and small to mid-sized corporations across Saskatchewan.",
  },
]

const successionFaqs = [
  {
    q: "What is a business succession plan?",
    a: "A business succession plan outlines how ownership and control of a business will transfer in the event of retirement, incapacity, death, or exit. It addresses who will take over the business, how the transition will occur, and how the business and family will be protected.",
  },
  {
    q: "Why is business succession planning important?",
    a: "Without a succession plan, businesses may face disruption, disputes, or financial loss. A clear plan helps preserve the value of the business, ensures continuity, and provides certainty for family members, partners, employees, and lenders.",
  },
  {
    q: "When should I start succession planning?",
    a: "Succession planning should begin well before it is needed. Ideally, planning starts while the business is stable and the owner has the capacity to make informed decisions. Early planning provides more options and flexibility.",
  },
  {
    q: "Who can take over my business?",
    a: "Successors may include family members, business partners, key employees, or third-party purchasers. The right choice depends on your goals, the nature of the business, and the readiness of potential successors.",
  },
  {
    q: "Does succession planning only apply to family businesses?",
    a: "No. Succession planning is important for all business owners, including those with partners or shareholders. It helps ensure the business continues smoothly regardless of ownership structure.",
  },
  {
    q: "How does a succession plan work with shareholder agreements?",
    a: "Shareholder or partnership agreements often form a key part of a succession plan. These agreements can address buy-sell arrangements, funding mechanisms, valuation methods, and exit strategies.",
  },
  {
    q: "How does business succession planning connect with estate planning?",
    a: "Business succession planning and estate planning should work together. A Will alone is often insufficient to address business interests. Coordinated planning helps avoid conflicts, tax issues, and unintended outcomes.",
  },
  {
    q: "What documents are typically involved in succession planning?",
    a: "Depending on the situation, succession planning may involve shareholder or partnership agreements, buy-sell provisions, corporate restructuring, Wills and estate planning documents, Powers of Attorney, and insurance planning (in coordination with advisors).",
  },
  {
    q: "Can succession planning help minimize taxes?",
    a: "Yes. Proper planning may help manage tax exposure and preserve business value. Succession planning often involves working with accountants and financial advisors to achieve tax-efficient outcomes.",
  },
  {
    q: "What happens if there is no succession plan?",
    a: "Without a plan, business ownership may be transferred in a way that does not reflect the owner's wishes, potentially leading to disputes, delays, or forced sales. This can negatively impact the business and family members.",
  },
  {
    q: "How can a lawyer help with succession planning?",
    a: "A lawyer helps identify legal risks, draft and coordinate necessary documents, and ensure succession plans align with corporate, estate, and family objectives. Legal guidance is essential to creating a clear and enforceable plan.",
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

export default function CorporateCommercialPage() {
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
            Corporate &amp; Commercial Law
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Tomi Law Office provides practical and strategic legal services to business owners, entrepreneurs,
            professionals, farmers, and organizations across Saskatchewan. Whether you are starting a business,
            restructuring, expanding, or planning for succession, we offer clear legal guidance tailored to your
            business goals.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We understand that business decisions often involve risk, timing, and long-term planning. Our approach is
            to provide efficient, solution-focused advice that supports your operations while protecting your interests.
          </p>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <div className="space-y-10">

            {[
              {
                title: "Business Formation & Structuring",
                body: "Choosing the right business structure at the outset is critical. We assist clients in selecting and establishing business entities that align with their objectives and future plans.",
                items: [
                  "Incorporation of corporations",
                  "Formation of sole proprietorships and partnerships",
                  "Non-profit and not-for-profit corporations",
                  "Share structure and organizational planning",
                  "Business name registrations",
                ],
              },
              {
                title: "Ongoing Corporate Services & Governance",
                body: "We support businesses throughout their lifecycle with ongoing corporate and governance services, helping ensure compliance and operational clarity.",
                items: [
                  "Annual corporate maintenance and filings",
                  "Director and shareholder resolutions",
                  "Minute book preparation and maintenance",
                  "Changes to directors, officers, or shareholders",
                  "Share issuances, transfers, and redemptions",
                ],
              },
              {
                title: "Corporate Transactions & Reorganizations",
                body: "As businesses evolve, legal structures often need to change. We assist with transactions and reorganizations designed to support growth, succession planning, and tax efficiency.",
                items: [
                  "Corporate reorganizations and restructurings",
                  "Amalgamations and continuations",
                  "Business acquisitions and asset purchases",
                  "Share purchase transactions",
                  "Business succession planning",
                ],
              },
              {
                title: "Commercial Agreements",
                body: "Clear, well-drafted agreements are essential to reducing risk and avoiding disputes. We assist clients with preparing and reviewing commercial agreements that support their business relationships.",
                items: [
                  "Shareholder agreements",
                  "Partnership and joint venture agreements",
                  "Commercial contracts and agreements",
                  "Franchise-related documentation",
                  "Buy-sell and exit planning agreements",
                ],
              },
              {
                title: "Extra-Provincial & Business Registrations",
                body: "We assist corporations operating in multiple jurisdictions with registration and compliance matters.",
                items: [
                  "Extra-provincial registrations",
                  "Acting as attorney for extra-provincial corporations",
                  "Corporate continuations and restorations",
                ],
              },
              {
                title: "Integrated Business & Estate Planning",
                body: "For many clients, business planning and estate planning go hand in hand. We work closely with business owners to coordinate corporate planning with wills, estate plans, and succession strategies to ensure continuity and long-term protection.",
                items: [],
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-[#002548] mb-2 pb-2 border-b-2 border-[#d4a017] inline-block">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">{section.body}</p>
                {section.items.length > 0 && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-6">
            Why Choose Tomi Law Office for Corporate &amp; Commercial Law
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Practical, business-focused legal advice",
              "Experience with small, mid-sized, and family-owned businesses",
              "Integrated corporate, real estate, and estate planning services",
              "Clear communication and efficient service",
              "Trusted legal support across Saskatchewan",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 p-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl">
          <div className="mb-10">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Common Questions</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Corporate &amp; Commercial Law FAQ</h2>
            <div className="w-16 h-1 bg-[#d4a017]"></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Whether you are starting a business, restructuring, or managing ongoing operations, having the right legal
            guidance can help protect your investment and support long-term success.
          </p>
          <div>
            {corporateFaqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Succession FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl">
          <div className="mb-10">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Planning Ahead</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Business Succession Planning FAQ</h2>
            <div className="w-16 h-1 bg-[#d4a017]"></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Business succession planning helps ensure the smooth transition of ownership and management when a business
            owner retires, becomes incapacitated, or passes away. The following questions address common concerns and
            misconceptions.
          </p>
          <div>
            {successionFaqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002548] py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Speak With a Corporate Lawyer</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            If you are starting a business, restructuring, or require ongoing corporate legal support, we invite you
            to contact Tomi Law Office to schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4a017] text-white px-8 py-3 font-medium hover:bg-[#c09015] transition-colors"
          >
            Book a Business Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
