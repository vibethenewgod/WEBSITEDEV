import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Team | Tomi Law Office",
  description: "Meet the experienced legal team at Tomi Law Office — serving clients across Saskatchewan with dedication and expertise.",
}

const staff = [
  {
    name: "Cheryl Hill",
    role: "Real Estate Paralegal",
    bio: "Cheryl attended business college in 1980 and has since worked as a Real Estate paralegal. Cheryl brings over 45 years of experience in real estate law, providing specialized support on residential, commercial, and agricultural transactions. Her depth of knowledge and attention to detail are invaluable to both clients and the firm.",
  },
  {
    name: "Carla Reed",
    role: "Office Manager & Corporate Assistant",
    bio: "Carla oversees the day-to-day operations of the firm and assists with corporate and estate planning matters. With more than 12 years of experience with the practice, she ensures files progress efficiently and clients are well supported.",
  },
  {
    name: "Amanda Nickel",
    role: "Legal Assistant – Estates & Real Estate",
    bio: "Amanda assists with estate administration and real estate transactions, supporting clients through each stage of the process with care, organization, and responsiveness.",
  },
  {
    name: "Alicia Hilkewich",
    role: "Legal Assistant – Real Estate",
    bio: "Alicia focuses on residential and commercial real estate matters, assisting with conveyancing and transaction coordination to ensure timely and accurate completion of files.",
  },
  {
    name: "Danielle Lebel",
    role: "Legal Assistant – Real Estate & Family Law",
    bio: "Danielle assists with real estate transactions and non-contentious family law matters, providing organized and client-focused support during important legal transitions.",
  },
]

export default function TeamPage() {
  return (
    <>
      <div className="bg-[#002548]">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="bg-[#002548] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">The People Behind the Practice</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-3xl">
            Our Team
          </h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Principal Lawyer */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Photo placeholder */}
            <div className="relative">
              <div className="relative h-[480px] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image src="/images/about-team.jpg" alt="Tomi Olutunfese" fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border-4 border-[#d4a017] -z-10" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-2">Principal Lawyer</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#002548] mb-1">Tomi Olutunfese</h2>
              <p className="text-gray-500 font-medium mb-1">LL.B (Hons), B.L., TEP</p>
              <p className="text-gray-500 text-sm mb-6">Barrister & Solicitor</p>
              <div className="w-16 h-1 bg-[#d4a017] mb-8"></div>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Tomi Olutunfese is the founder and principal lawyer of Tomi Law Office. She was called to the
                  Nigerian Bar in 2009 and the Saskatchewan Bar in 2016. Tomi began her legal career in Nigeria
                  before relocating to Canada in 2012, where she completed all five NCA qualifying examinations
                  and earned a Diploma in International Business Management from Niagara College.
                </p>
                <p>
                  Tomi articled with Burningham Law Office and later assumed ownership of the practice in 2018,
                  continuing a legacy of over 35 years of trusted legal service. She advises clients across
                  Saskatchewan in estate planning, corporate and commercial law, real estate, and non-contentious
                  family law.
                </p>
                <p>
                  Tomi holds the <strong>Trust and Estate Practitioner (TEP)</strong> designation and is the
                  recipient of the <strong>Victor P. Dietz, K.C. Pro Bono Service Award</strong> in recognition
                  of her contributions to pro bono legal services in Saskatchewan.
                </p>
                <p>
                  She serves as a <strong>Bencher of the Law Society of Saskatchewan</strong>, a Council Member
                  of the Canadian Bar Association, a member of the Canadian Tax Foundation, and the Town of
                  Nipawin representative on the Nipawin Library Board.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Called to the Saskatchewan Bar — 2016",
                  "Trust & Estate Practitioner (TEP)",
                  "Bencher, Law Society of Saskatchewan",
                  "Victor P. Dietz, K.C. Pro Bono Award — 2025",
                  "Council Member, Canadian Bar Association",
                  "Member, Canadian Tax Foundation",
                ].map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Team Matters */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">More Than Legal Advice</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#002548] mb-4">Why Our Team Matters</h2>
            <div className="w-20 h-1 bg-[#d4a017] mx-auto mb-8"></div>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              At Tomi Law Office, our clients benefit from more than legal advice — they benefit from a dedicated
              and experienced team working together behind the scenes.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Our support staff brings decades of combined experience across real estate, estate administration,
              and family law. This depth of knowledge allows files to move efficiently, deadlines to be met, and
              details to be handled accurately. Clients are supported by professionals who understand the process,
              anticipate issues, and provide consistent communication throughout each matter.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Continuity is one of our firm's greatest strengths. Many team members have worked in the practice
              for years, bringing stability, institutional knowledge, and strong client relationships. This
              collaborative approach ensures that every file receives the attention, care, and professionalism it
              deserves.
            </p>
          </div>
          <div className="text-center">
            <p className="text-[#002548] font-semibold italic max-w-2xl mx-auto">
              "Our team's experience and continuity allow us to deliver efficient, accurate, and dependable legal
              services across Saskatchewan."
            </p>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Supporting the Practice</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#002548] mb-4">Our Staff</h2>
            <div className="w-20 h-1 bg-[#d4a017] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member) => (
              <div key={member.name} className="bg-gray-50 border-t-4 border-[#d4a017] p-8">
                <div className="w-16 h-16 rounded-full bg-[#002548] flex items-center justify-center mb-5">
                  <span className="text-white text-xl font-semibold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#002548] mb-1">{member.name}</h3>
                <p className="text-[#d4a017] text-sm font-medium uppercase tracking-wide mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002548] py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Ready to work with our team?</h2>
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
