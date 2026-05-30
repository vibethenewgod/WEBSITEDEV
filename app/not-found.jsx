import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F8FC] px-4 py-16">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#1E72C8] mb-4">Page not found</p>
        <h1 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] font-semibold mb-6">
          We couldn’t find that page.
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          The page you're looking for doesn't exist or has been moved. Return to the homepage to continue exploring.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#1E72C8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6BBFEA] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
