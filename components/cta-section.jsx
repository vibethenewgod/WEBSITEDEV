import Link from "next/link"

export default function CTASection() {
    return (
        <section className="py-10 md:py-14 bg-[#0099D8]">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-3 font-semibold uppercase">
                    GET THE INSIGHTS THAT MATTER
                </h2>
                <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl mx-auto uppercase">
                    KEEP UP TO DATE WITH EVENTS AND UPDATES, NOW AND IN THE FUTURE.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300 border border-white/30 hover:border-white/50 rounded-sm"
                >
                    SUBSCRIBE
                </Link>
            </div>
        </section>
    )
}
