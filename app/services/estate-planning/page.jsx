"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const executorFaqs = [
  {
    q: "What does an executor do?",
    a: "An executor is responsible for administering the estate of a person who has died. This includes gathering estate assets, paying debts and taxes, applying for probate if required, distributing assets to beneficiaries, and keeping accurate records throughout the process.",
  },
  {
    q: "Do I need a lawyer to act as an executor?",
    a: "While an executor is not legally required to retain a lawyer, estate administration often involves complex legal and procedural steps. A lawyer can assist with probate applications, interpret the Will, ensure legal requirements are met, and help reduce the risk of personal liability for the executor.",
  },
  {
    q: "When is probate required?",
    a: "Probate is often required when assets are held solely in the deceased's name or when financial institutions request it before releasing funds. Not every estate requires probate, and whether it is needed depends on the nature and value of the assets. We can help determine if probate is required in your situation.",
  },
  {
    q: "How long does estate administration take?",
    a: "The timeline varies depending on the size and complexity of the estate, whether probate is required, and whether there are disputes or outstanding liabilities. Many estates take several months to administer, while more complex estates can take longer.",
  },
  {
    q: "Can an executor be paid?",
    a: "Yes. Executors are generally entitled to reasonable compensation for their work, unless the Will states otherwise. Compensation is subject to approval and must be justified based on the time and effort involved.",
  },
  {
    q: "What happens if there is no Will?",
    a: "If a person dies without a Will, the estate is distributed according to Saskatchewan law. An administrator must be appointed by the court, and the process can be more time-consuming and restrictive. We can assist with applications for Letters of Administration and guide administrators through the process.",
  },
  {
    q: "What are the risks of acting as an executor?",
    a: "Executors have legal responsibilities and can be personally liable for mistakes, such as distributing assets too early, failing to pay debts or taxes, or not keeping proper records. Obtaining legal advice can help executors fulfill their duties properly and reduce personal risk.",
  },
  {
    q: "What should I do first if I've been named executor?",
    a: "Before taking action, it is important to locate the original Will, obtain multiple death certificates, and seek legal advice. Certain steps should not be taken until you understand your role and obligations.",
  },
]

const willsFaqs = [
  {
    q: "Do I really need a Will?",
    a: "Yes. A Will allows you to decide how your assets are distributed, who will act as your executor, and who will care for your minor children. Without a Will, your estate is distributed according to Saskatchewan law, which may not reflect your wishes and can lead to delays and added costs.",
  },
  {
    q: "What happens if I die without a Will?",
    a: "If you die without a Will, you are considered to have died \"intestate.\" The court will appoint an administrator, and your estate will be distributed according to legislation. This process is often more time-consuming, restrictive, and costly for your family.",
  },
  {
    q: "When should I make or update my Will?",
    a: "You should prepare a Will once you are an adult and review it regularly. It is especially important to update your Will after major life events, such as marriage, separation or divorce, the birth of a child, the death of a beneficiary or executor, acquiring or selling significant assets, or starting or selling a business.",
  },
  {
    q: "Can I prepare my own Will or use an online Will kit?",
    a: "While DIY or online Wills may appear convenient, they often fail to address individual circumstances and Saskatchewan legal requirements. Errors in wording, execution, or planning can lead to disputes, invalid documents, or unintended outcomes. A properly drafted Will provides clarity and legal certainty.",
  },
  {
    q: "What should I include in my Will?",
    a: "A Will typically includes instructions for the distribution of your assets, appointment of an executor, and guardianship of minor children. Depending on your circumstances, it may also address trusts, business interests, charitable gifts, and succession planning.",
  },
  {
    q: "Who should I choose as my executor?",
    a: "Your executor should be someone you trust, who is organized, capable, and willing to take on the responsibility. Naming more than one executor or choosing someone based solely on emotion can create complications. We can help you assess the best choice for your situation.",
  },
  {
    q: "Do I need a new Will if I get married or divorced?",
    a: "Marriage, separation, and divorce can significantly affect your Will. In some cases, an existing Will may be impacted or no longer reflect your intentions. It is important to review your Will promptly following any change in marital status.",
  },
  {
    q: "Is a Will enough, or do I need other documents?",
    a: "A Will only takes effect after death. Most people also need Powers of Attorney and a Health Care Directive to ensure their wishes are respected during incapacity. Estate planning typically involves more than one document.",
  },
  {
    q: "Where should I keep my Will?",
    a: "Your original Will should be stored in a safe and accessible location. Your executor should know where it is kept. We can discuss secure storage options and best practices.",
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

export default function EstatePlanningPage() {
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
            Estate Planning, Wills &amp; Estate Administration
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Planning for the future is one of the most important steps you can take to protect your family, your
            assets, and your legacy. At Tomi Law Office, we provide thoughtful and practical guidance to help clients
            make informed decisions about their estate planning needs and to support executors and families through the
            estate administration process.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We work with individuals and families across Saskatchewan to create clear, effective estate plans and to
            administer estates efficiently and with care.
          </p>
        </div>
      </section>

      {/* Three service areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
          <div className="space-y-12">

            {/* Estate Planning */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Estate Planning</h2>
              <div className="w-16 h-1 bg-[#d4a017] mb-6"></div>
              <p className="text-gray-700 text-base leading-relaxed mb-5">
                Estate planning is not just about preparing a Will — it is about ensuring your wishes are respected
                during your lifetime and after your passing. We take the time to understand your personal, family, and
                financial circumstances and develop a plan that reflects your goals.
              </p>
              <p className="text-gray-600 text-sm font-semibold mb-3">Our estate planning services include:</p>
              <ul className="space-y-2 mb-5">
                {[
                  "Preparation and updating of Wills",
                  "Powers of Attorney (property and financial matters)",
                  "Health Care Directives",
                  "Trust planning",
                  "Planning for blended families and minor children",
                  "Business succession and estate considerations",
                  "Asset protection and incapacity planning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                With Tomi's Trust and Estate Practitioner (TEP) designation, clients benefit from advanced knowledge
                and careful planning tailored to complex and evolving estate needs.
              </p>
            </div>

            {/* Wills */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Wills</h2>
              <div className="w-16 h-1 bg-[#d4a017] mb-6"></div>
              <p className="text-gray-700 text-base leading-relaxed mb-5">
                A properly drafted Will provides clarity, reduces the risk of disputes, and ensures your estate is
                distributed according to your wishes. We help clients prepare Wills that are legally valid, clearly
                written, and reflective of their unique circumstances.
              </p>
              <p className="text-gray-600 text-sm font-semibold mb-3">Our Will services include:</p>
              <ul className="space-y-2 mb-5">
                {[
                  "First-time Wills",
                  "Updating or revising existing Wills",
                  "Planning for guardianship of minor children",
                  "Executor and trustee appointments",
                  "Review of beneficiary designations and asset distribution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                We also advise clients on common estate planning mistakes and help ensure their documents remain
                current as life circumstances change.
              </p>
            </div>

            {/* Estate Administration */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Estate Administration</h2>
              <div className="w-16 h-1 bg-[#d4a017] mb-6"></div>
              <p className="text-gray-700 text-base leading-relaxed mb-5">
                Administering an estate can be complex and time-consuming, particularly during a difficult time. We
                provide practical guidance and legal support to executors, administrators, and beneficiaries to help
                estates move forward efficiently and in compliance with Saskatchewan law.
              </p>
              <p className="text-gray-600 text-sm font-semibold mb-3">Our estate administration services include:</p>
              <ul className="space-y-2 mb-5">
                {[
                  "Probate and Letters of Administration applications",
                  "Executor and administrator guidance",
                  "Estate asset identification and distribution",
                  "Assistance with creditor claims and estate liabilities",
                  "Estate reporting and documentation",
                  "Support for estates where there is no Will",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work closely with executors to explain their responsibilities, manage timelines, and reduce stress
                throughout the administration process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executor FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl">
          <div className="mb-10">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Estate Administration</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Executor FAQ</h2>
            <div className="w-16 h-1 bg-[#d4a017]"></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Being named an executor can feel overwhelming, especially during a time of loss. The following questions
            address common concerns we hear from executors and families. Legal advice early in the process can help
            avoid delays, mistakes, and unnecessary stress.
          </p>
          <div>
            {executorFaqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Wills FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl">
          <div className="mb-10">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Wills</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-2">Wills FAQ</h2>
            <div className="w-16 h-1 bg-[#d4a017]"></div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            A Will is one of the most important legal documents you can have. The following answers address common
            questions we receive from clients when preparing or updating their Wills.
          </p>
          <div>
            {willsFaqs.map((faq) => (
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
            If you would like to prepare or update your estate plan, or if you have been appointed as an executor or
            administrator and need assistance, we invite you to contact our office to schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4a017] text-white px-8 py-3 font-medium hover:bg-[#c09015] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
