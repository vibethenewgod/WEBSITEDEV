const cards = [
  {
    label: "Our Foundation",
    heading: "Our Foundation",
    body: "Tomi Law Office provides practical, client-focused legal services across Saskatchewan. Built on more than 35 years of continuity, we deliver clear advice and dependable outcomes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    label: "Our Approach",
    heading: "Our Approach",
    body: "Good legal advice should be clear and practical. We focus on understanding your circumstances, explaining options plainly, and helping you make informed decisions with confidence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    label: "Perspective",
    heading: "Perspective",
    body: "Our practice is shaped by continuity, institutional knowledge, and long-standing professional relationships—bringing perspective, efficiency, and foresight to every matter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    label: "Working With Us",
    heading: "Working With Us",
    body: "Clients value our clear communication, steady guidance, and practical focus. We build long-term relationships and provide legal support clients can rely on as life evolves.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
]

export default function FirmCardsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a2a3a]" id="why-us">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-white/90 uppercase tracking-[0.3em] text-lg md:text-xl font-semibold mb-4">
            What Sets Us Apart
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white max-w-3xl mx-auto leading-tight">
            Continuity, clarity, and confidence for every client.
          </h2>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={card.label}
              className="bg-white rounded-[1.5rem] shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden min-h-[26rem]"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-[#002548] mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#002548] mb-3 pb-3 border-b-2 border-[#0099D8]">{card.heading}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
