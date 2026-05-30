import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us | Tomi Law Office",
  description: "Learn about Tomi Law Office — a client-focused law firm serving individuals, families, and businesses across Saskatchewan for over 35 years.",
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#002548]">
        <Navbar />
      </div>

      {/* Page Hero */}
      <div className="bg-[#002548] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Who We Are</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-3xl">
            About Us
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Image */}
            <div className="relative">
              <div className="relative h-80 md:h-[520px] w-full overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Tomi Law Office team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-4 border-[#d4a017] -z-10" />

              {/* Legacy badge */}
              <div className="absolute -bottom-6 left-6 bg-[#002548] text-white px-6 py-4 shadow-lg">
                <p className="text-3xl font-bold text-[#d4a017]">35+</p>
                <p className="text-sm uppercase tracking-wide">Years of Legal Service</p>
              </div>
            </div>

            {/* Right: Story */}
            <div className="pt-8 lg:pt-0">
              <div className="space-y-5 text-gray-700 text-base leading-relaxed">
                <p>
                  Tomi Law Office is a client-focused law firm providing practical, efficient legal services to
                  individuals, families, farmers, and businesses throughout Saskatchewan. With offices in Nipawin
                  and Tisdale, we serve clients across the province with trusted, accessible legal guidance.
                </p>
                <p>
                  Established in 2018, Tomi Law Office continues the legacy of Burningham Law Office, a respected
                  practice built by Kirby Burningham over more than 35 years. Tomi worked alongside Kirby prior to
                  his passing in 2017 and later acquired and continued the practice, maintaining its longstanding
                  commitment to trusted advice, strong client relationships, and dependable service.
                </p>
                <p>
                  Our firm is supported by an experienced and dedicated team, including long-standing staff members
                  who transitioned with the practice. With decades of combined experience in real estate, corporate
                  and commercial law, estate planning and administration, family law, and client service, our team
                  provides knowledgeable and efficient support across all areas of practice.
                </p>
                <p>
                  Tomi Law Office advises clients in real estate law, corporate and commercial matters, estate
                  planning and estate administration, wills and powers of attorney, and non-contentious family law.
                  Our approach is grounded in understanding each client's unique circumstances and delivering
                  tailored legal solutions that provide clarity, confidence, and long-term value.
                </p>
                <p>
                  The firm also offers advanced estate and succession planning, supported by Tomi's Trust and
                  Estate Practitioner (TEP) designation — an internationally recognized credential in trust and
                  estate expertise.
                </p>
                <p>
                  At Tomi Law Office, we recognize that legal matters are often personal and complex. We value
                  long-term client relationships and are committed to providing clear advice, thoughtful planning,
                  and professional service grounded in trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#002548] mb-6 max-w-3xl mx-auto leading-snug">
            Trusted Legal Guidance for Life, Business, and Legacy
          </h2>
          <div className="w-20 h-1 bg-[#d4a017] mx-auto mb-8"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            At Tomi Law Office, we understand that legal matters affect your family, your business, and your
            future. Serving clients across Saskatchewan, we provide personalized legal services designed to
            protect what matters most. Our experienced team is dedicated to guiding you through important
            legal decisions with clarity, confidence, and care.
          </p>
        </div>
      </section>

      {/* Values row */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Our Mission", text: "To provide efficient, practical, and affordable legal services — with the time taken to truly listen and understand each client's needs." },
              { label: "Our Values", text: "Integrity, continuity, and client focus guide every matter we handle. We take pride in achieving the best possible result for every client we represent." },
              { label: "Our Commitment", text: "We are committed to serving our communities in Nipawin and Tisdale — and clients across Saskatchewan — with excellence and dependable legal guidance." },
            ].map((v) => (
              <div key={v.label} className="p-8 border-t-4 border-[#d4a017] bg-gray-50">
                <h3 className="text-lg font-semibold text-[#002548] mb-3">{v.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002548] py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Ready to speak with our team?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Contact our Tisdale or Nipawin office to schedule a consultation.</p>
          <Link href="/contact" className="inline-block bg-[#d4a017] text-white px-8 py-3 font-medium hover:bg-[#c09015] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
