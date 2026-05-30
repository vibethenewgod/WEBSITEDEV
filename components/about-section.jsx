import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image with gold accent */}
          <div className="relative">
            <div className="relative h-80 md:h-[480px] w-full overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Tomi Law Office team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-4 border-[#1E72C8] -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[#1E72C8] uppercase tracking-widest text-sm font-semibold mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
              About Us
            </h2>
            <div className="w-20 h-1 bg-[#1E72C8] mb-8"></div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
              Tomi Law Office provides practical, efficient, and client-focused legal services to individuals,
              families, farmers, and businesses across Saskatchewan. With offices in Nipawin and Tisdale, our
              firm offers trusted guidance in corporate and commercial law, real estate, estate planning and
              administration, wills and powers of attorney, and non-contentious family law.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Built on a legacy of more than 35 years of legal service, we are committed to delivering clear
              advice, tailored solutions, and dependable outcomes.
            </p>

            <Link
              href="/about"
              className="inline-block bg-[#1E72C8] text-white px-8 py-3 font-medium hover:bg-[#6BBFEA] transition-colors"
            >
              Learn More About Our Firm
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
