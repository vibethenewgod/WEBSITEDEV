"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const insights = [
  {
    id: 1,
    category: "Firm Update",
    image: "/images/insight-canada-1.jpg",
    date: "2025",
    title: "Advanced Estate Planning Expertise",
    description:
      "Tomi Olutunfese has earned the Trust and Estate Practitioner (TEP) designation, reflecting advanced knowledge and experience in estate planning and estate administration.",
    link: "#",
  },
  {
    id: 2,
    category: "Estate Planning Insight",
    image: "/images/insight-canada-2.jpg",
    date: "2025",
    title: "A Will Is Only One Part of the Plan",
    description:
      "Effective estate planning goes beyond a Will. Planning for incapacity and decision-making during life is just as important as planning for what comes after.",
    link: "#",
  },
  {
    id: 3,
    category: "Community Involvement",
    image: "/images/insight-canada-3.jpg",
    date: "2025",
    title: "Supporting the Communities We Serve",
    description:
      "Tomi Olutunfese was recently appointed to serve on the Nipawin Library Board as the Town of Nipawin's representative, reflecting our commitment to community involvement and public service.",
    link: "#",
  },
  {
    id: 4,
    category: "Firm Update",
    image: "/images/insight-canada-4.jpg",
    date: "2025",
    title: "Recognized for Pro Bono Service",
    description:
      "Tomi Olutunfese was honoured with the 2025 Victor P. Dietz, K.C. Pro Bono Service Award for her contributions to pro bono legal services in Saskatchewan.",
    link: "#",
  },
  {
    id: 5,
    category: "Firm Update",
    image: "/images/insight-canada-5.jpg",
    date: "2025",
    title: "Articling Student Joins Tomi Law Office",
    description:
      "We are pleased to welcome Zemaye Ahme to Tomi Law Office as an articling student, supporting our practice across estate planning, real estate, and corporate matters.",
    link: "#",
  },
]

export default function InsightsSection() {
  const containerRef = useRef(null)

  const next = () => containerRef.current?.scrollBy({ left: 320, behavior: "smooth" })
  const prev = () => containerRef.current?.scrollBy({ left: -320, behavior: "smooth" })

  return (
    <section className="py-16 md:py-24 bg-white" id="insights">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-[#0099D8] uppercase tracking-widest text-sm font-semibold mb-3">News & Updates</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#002548] mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-[#0099D8] mx-auto"></div>
        </div>

        {/* Scrollable carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide scroll-smooth pb-4"
          >
            {insights.map((insight) => (
              <Link
                key={insight.id}
                href={insight.link}
                className="snap-center flex-shrink-0 w-[85%] sm:w-[45%] md:w-[31%] lg:w-[28%] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-[#0099D8] text-white text-[10px] uppercase tracking-widest font-semibold px-2 py-1">
                    {insight.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col">
                  <h3 className="text-sm md:text-base font-semibold text-[#002548] mb-2 group-hover:text-[#0099D8] transition-colors leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3 mb-4">
                    {insight.description}
                  </p>
                  <span className="text-[#002548] text-xs font-semibold uppercase tracking-wide flex items-center gap-1 mt-auto group-hover:text-[#0099D8] transition-colors">
                    Read more <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2.5 rounded-full shadow hover:shadow-md hover:border-[#0099D8] transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-[#002548]" strokeWidth={2} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2.5 rounded-full shadow hover:shadow-md hover:border-[#0099D8] transition"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-[#002548]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}
