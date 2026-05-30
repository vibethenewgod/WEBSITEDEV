import Link from "next/link"

const reasons = [
  {
    number: "01",
    title: "Local Knowledge",
    description:
      "With offices in Tisdale and Nipawin, we are deeply rooted in Saskatchewan communities. We understand the local legal landscape and the people we serve.",
  },
  {
    number: "02",
    title: "Experienced Team",
    description:
      "Led by Tomi Olutunfese LL.B (Hons), B.L., our team brings broad legal expertise across multiple practice areas, delivering results-driven representation.",
  },
  {
    number: "03",
    title: "Affordable & Efficient",
    description:
      "We believe quality legal services should be accessible. We work efficiently without sacrificing the thoroughness your case deserves.",
  },
  {
    number: "04",
    title: "Comprehensive Services",
    description:
      "From family law and real estate to corporate law and estate planning, we offer a full spectrum of legal services under one roof.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#1E72C8] uppercase tracking-widest text-sm font-semibold mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
              Expertise You Can Trust
            </h2>
            <div className="w-20 h-1 bg-[#1E72C8] mb-8"></div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              At Tomi Law Office, we combine deep legal expertise with a genuine commitment to our clients.
              Our reputation is built on integrity, hard work, and the results we achieve for the people we represent.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#1E72C8] text-white px-8 py-3 font-medium hover:bg-[#6BBFEA] transition-colors"
            >
              Meet Our Team
            </Link>
          </div>

          {/* Right: Reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div key={reason.number} className="p-6 bg-gray-50 border-l-4 border-[#D8E6F3]">
                <p className="text-3xl font-bold text-[#1E72C8]/30 mb-2 leading-none">{reason.number}</p>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
