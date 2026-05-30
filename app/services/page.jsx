import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Services | Tomi Law Office",
  description: "Tomi Law Office provides legal services in real estate, estate planning, corporate law, and family law across Saskatchewan.",
}

const services = [
  {
    title: "Real Estate Law",
    slug: "real-estate",
    description:
      "We assist with residential, commercial, and agricultural real estate transactions across Saskatchewan. Our team provides careful, efficient support to help ensure each transaction is completed accurately and on time.",
    highlights: [
      "Residential & commercial purchases and sales",
      "Mortgage financing and refinancing",
      "Agricultural and farmland transactions",
      "Commercial and farm lease agreements",
      "Title searches and registrations",
    ],
  },
  {
    title: "Corporate & Commercial Law",
    slug: "corporate-commercial",
    description:
      "We provide practical legal guidance to business owners, professionals, and organizations at every stage. From business structuring to ongoing corporate matters and transactions, our focus is on clarity, efficiency, and long-term planning.",
    highlights: [
      "Business incorporation and structuring",
      "Ongoing corporate maintenance and filings",
      "Corporate transactions and reorganizations",
      "Shareholder and commercial agreements",
      "Business succession planning",
    ],
  },
  {
    title: "Estate Planning",
    slug: "estate-planning",
    description:
      "We help individuals and families plan for the future by preparing clear, effective estate plans. Our approach considers your personal, family, and financial circumstances to ensure your wishes are respected during life and after death.",
    highlights: [
      "Wills — preparation and updating",
      "Powers of Attorney",
      "Health Care Directives",
      "Trust planning",
      "Estate administration and probate",
    ],
  },
  {
    title: "Estate Administration",
    slug: "estate-planning",
    description:
      "We support executors and families through the estate administration process, including probate and distribution of assets. Our goal is to guide you through each step with clarity, care, and attention to detail.",
    highlights: [
      "Probate and Letters of Administration",
      "Executor and administrator guidance",
      "Estate asset identification and distribution",
      "Assistance with creditor claims",
      "Support for estates with no Will",
    ],
  },
  {
    title: "Family Law (Non-Contentious)",
    slug: "family-law",
    description:
      "We provide respectful, solution-focused legal support for non-contentious family law matters. Our services include prenuptial, cohabitation, and separation agreements designed to provide clarity and reduce conflict.",
    highlights: [
      "Prenuptial agreements",
      "Cohabitation agreements",
      "Separation agreements",
      "Independent legal advice",
      "Asset and debt protection planning",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="bg-[#002548]">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="bg-[#002548] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Legal Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-3xl">
            Our Services
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-3xl">
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Tomi Law Office provides a broad range of legal services to individuals, families, farmers, and businesses
            across Saskatchewan. With offices in Tisdale and Nipawin, our experienced team is here to provide
            practical, client-focused legal guidance tailored to your needs.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Our approach is grounded in understanding each client's unique circumstances and delivering tailored legal
            solutions that provide clarity, confidence, and long-term value.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 border-t-4 border-[#d4a017] p-8 flex flex-col">
                <h2 className="text-xl font-semibold text-[#002548] mb-3">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block text-center bg-[#002548] text-white px-6 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-[#003a6b] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002548] py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Ready to speak with our team?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact our Tisdale or Nipawin office to schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4a017] text-white px-8 py-3 font-medium hover:bg-[#c09015] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
