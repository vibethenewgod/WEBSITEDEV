"use client"

import { useState } from "react"

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission delay; replace with real API call when backend is ready
    await new Promise((resolve) => setTimeout(resolve, 800))
    setLoading(false)
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl font-medium text-[#1A1A1A] mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-4 font-normal">
              Tomi Law Office is a general law firm offering a broad range of legal services to our clients. With
              offices in Tisdale and Nipawin, we're here to serve our local communities.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Tisdale Office</h3>
                <p className="text-gray-700 font-normal">1106 101st Ave E</p>
                <p className="text-gray-700 font-normal">P.O. Box 1360</p>
                <p className="text-gray-700 font-normal">Tisdale SK S0E1T0</p>
                <p className="text-gray-700 font-normal mt-2">Phone: 306-873-4521</p>
                <p className="text-gray-700 font-normal">Fax: 306-873-5113</p>
                <p className="text-gray-700 font-normal mt-2">Hours of Operation:</p>
                <p className="text-gray-700 font-normal">Monday to Friday, 8:30am to 4:30pm</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Nipawin Office</h3>
                <p className="text-gray-700 font-normal">201 1st Ave W</p>
                <p className="text-gray-700 font-normal">Nipawin SK S0E1E0</p>
                <p className="text-gray-700 font-normal mt-2">Phone: 306-862-4511</p>
                <p className="text-gray-700 font-normal mt-2">Hours of Operation:</p>
                <p className="text-gray-700 font-normal">Monday to Wednesday, 9:00am to 4:00pm</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-[#002548]">Message Sent!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. A member of our team will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-[#1E72C8] underline hover:text-[#6BBFEA] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-normal text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E72C8]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-normal text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E72C8]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E72C8]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-normal text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E72C8]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-normal text-gray-700 mb-1">
                    Office Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E72C8] appearance-none bg-white"
                    required
                  >
                    <option value="">Select One</option>
                    <option value="tisdale">Tisdale</option>
                    <option value="nipawin">Nipawin</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-normal text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E72C8]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-normal text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E72C8]"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input type="checkbox" id="consent" name="consent" className="w-4 h-4" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="text-gray-600 font-normal">
                      I consent to receive email correspondence from Tomi Law Office related to my inquiry. I acknowledge
                      that I can opt-out or update my preferences at any time.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1E72C8] text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#6BBFEA] transition-colors font-normal rounded disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
