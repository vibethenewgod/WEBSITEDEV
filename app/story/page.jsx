import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Story | Tomi Law Office",
  description: "The story of Tomi Law Office — continuing a 35-year legal legacy in Saskatchewan with trusted, client-focused service.",
}

const milestones = [
  { year: "1980s", event: "Burningham Law Office established in Tisdale, Saskatchewan by Kirby Burningham." },
  { year: "2009", event: "Tomi Olutunfese called to the Nigerian Bar after completing her law degree from Obafemi Awolowo University." },
  { year: "2012", event: "Tomi relocates to Canada, completes all five NCA qualifying examinations, and earns a Diploma in International Business Management from Niagara College (President's Honour Roll)." },
  { year: "2016", event: "Tomi called to the Saskatchewan Bar after articling with Burningham Law Office and TSN Law." },
  { year: "2017", event: "Kirby Burningham passes away. His legacy of trusted legal service endures through the team he built." },
  { year: "2018 (Feb)", event: "Tomi assumes ownership of Burningham Law Office and establishes Tomi Law Office in Tisdale, continuing a practice with more than 35 years of history." },
  { year: "2018 (Mar)", event: "Tomi Law Office opens its second office in Nipawin, extending trusted legal services across northeastern Saskatchewan." },
  { year: "2025", event: "Tomi Olutunfese honoured with the Victor P. Dietz, K.C. Pro Bono Service Award and welcomes articling student Zemaye Ahme to the firm." },
]

export default function StoryPage() {
  return (
    <>
      <div className="bg-[#002548]">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="bg-[#002548] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">35 Years of Continuity</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-3xl">
            Our Story
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Opening narrative */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Built on Experience</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#002548] mb-6 leading-tight">
                A Legacy of Trusted Legal Service
              </h2>
              <div className="w-16 h-1 bg-[#d4a017] mb-8"></div>
              <div className="space-y-5 text-gray-700 text-base leading-relaxed">
                <p>
                  Tomi Law Office was established in 2018, continuing the legacy of Burningham Law Office — a
                  respected practice built by Kirby Burningham over more than 35 years of dedicated service to
                  clients in Tisdale and the surrounding region.
                </p>
                <p>
                  Tomi Olutunfese worked alongside Kirby prior to his passing in 2017. Deeply committed to
                  maintaining the trust and relationships Kirby had built, she later acquired and continued the
                  practice — preserving its longstanding values of dependable advice, strong client relationships,
                  and professional excellence.
                </p>
                <p>
                  In March 2018, Tomi Law Office extended its reach by opening a second office in Nipawin,
                  bringing trusted legal services to more clients across northeastern Saskatchewan.
                </p>
                <p>
                  Today, Tomi Law Office is guided by the same principles that defined the practice from the
                  beginning: listen carefully, advise clearly, and serve every client with integrity.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-80 md:h-[460px] w-full overflow-hidden">
                <Image src="/images/about-team.jpg" alt="Tomi Law Office" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 border-4 border-[#d4a017] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#002548] mb-4">A Timeline of Growth</h2>
            <div className="w-20 h-1 bg-[#d4a017] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#002548] flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#d4a017]" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-[#d4a017]/30 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-[#d4a017] font-bold text-sm uppercase tracking-widest mb-1">{m.year}</p>
                  <p className="text-gray-700 text-base leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-[#002548]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Guided by Continuity</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 max-w-2xl mx-auto">
            The Values That Define Us
          </h2>
          <div className="w-20 h-1 bg-[#d4a017] mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Continuity", text: "We honour the trust clients placed in this practice over 35 years — and carry it forward with every file we handle." },
              { title: "Integrity", text: "Our advice is honest, practical, and always focused on what is best for the client — not what is easiest." },
              { title: "Community", text: "Rooted in Tisdale and Nipawin, we are committed to the communities we serve and the people who call this region home." },
            ].map((v) => (
              <div key={v.title} className="border border-white/10 p-8 hover:border-[#d4a017]/50 transition-colors">
                <h3 className="text-lg font-semibold text-[#d4a017] mb-3">{v.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-4">Become Part of Our Story</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">We would be honoured to serve you and your family. Reach out to our team today.</p>
          <Link href="/contact" className="inline-block bg-[#002548] text-white px-8 py-3 font-medium hover:bg-[#003a6b] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
