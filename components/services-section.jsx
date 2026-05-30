import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Real Estate Law",
    description:
      "We assist with residential, commercial, and agricultural real estate transactions across Saskatchewan. Our team provides careful, efficient support to help ensure each transaction is completed accurately and on time.",
    image: "/images/real-estate.jpg",
    href: "/services/real-estate",
  },
  {
    title: "Corporate & Commercial Law",
    description:
      "We provide practical legal guidance to business owners, professionals, and organizations at every stage. From business structuring to ongoing corporate matters and transactions, our focus is on clarity, efficiency, and long-term planning.",
    image: "/images/commitment-1.jpg",
    href: "/services/corporate-commercial",
  },
  {
    title: "Estate Planning",
    description:
      "We help individuals and families plan for the future by preparing clear, effective estate plans. Our approach considers your personal, family, and financial circumstances to ensure your wishes are respected during life and after death.",
    image: "/images/estate-planning.jpg",
    href: "/services/estate-planning",
  },
  {
    title: "Estate Administration",
    description:
      "We support executors and families through the estate administration process, including probate and distribution of assets. Our goal is to guide you through each step with clarity, care, and attention to detail.",
    image: "/images/insight-canada-2.jpg",
    href: "/services/estate-planning",
  },
  {
    title: "Family Law (Non-Contentious)",
    description:
      "We provide respectful, solution-focused legal support for non-contentious family law matters. Our services include prenuptial, cohabitation, and separation agreements designed to provide clarity and reduce conflict.",
    image: "/images/family-law.jpg",
    href: "/services/family-law",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#1E72C8] uppercase tracking-widest text-sm font-semibold mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#1E72C8] mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Tomi Law Office provides trusted legal guidance across Saskatchewan. Whatever your legal need,
            our experienced team is here to help.
          </p>
        </div>

        {/* Grid — first 3 full width, last 2 centred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#1E72C8] text-white px-8 py-3 font-medium hover:bg-[#6BBFEA] transition-colors"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1E72C8]/20 group-hover:bg-[#1E72C8]/10 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-[#1E72C8] font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
