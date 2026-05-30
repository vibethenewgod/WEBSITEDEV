import Link from "next/link"

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#d4a017]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "We Listen",
    description:
      "Every client's situation is unique. We take the time to truly hear your concerns before offering any advice, ensuring we fully understand what matters most to you.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#d4a017]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "We Understand",
    description:
      "We assess your needs and objectives thoroughly, providing clear explanations of your legal options so you can make informed decisions with confidence.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#d4a017]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "We Deliver",
    description:
      "We offer practical, affordable solutions tailored to your individual or corporate needs — and take pride in achieving the best possible outcomes for every client.",
  },
]

export default function ClientFocusSection() {
  return (
    <section className="py-16 md:py-24 bg-[#002548]" id="client-focus">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">Client Focus</h2>
          <div className="w-20 h-1 bg-[#d4a017] mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            At Tomi Law Office, you are more than a file number. Our client-first approach means every decision we
            make is guided by your best interests.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center p-8 border border-white/10 hover:border-[#d4a017]/50 transition-colors duration-300"
            >
              <div className="mb-5 p-4 rounded-full bg-white/5">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/about"
            className="inline-block border border-[#d4a017] text-[#d4a017] px-8 py-3 font-medium hover:bg-[#d4a017] hover:text-white transition-colors duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
