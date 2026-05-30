"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const offices = [
  {
    city: "Tisdale",
    address: ["1106 101st Ave E", "P.O. Box 1360", "Tisdale SK  S0E 1T0"],
    phone: "306-873-4521",
    fax: "306-873-5113",
    hours: ["Monday to Friday", "8:30 am – 4:30 pm"],
  },
  {
    city: "Nipawin",
    address: ["201 1st Ave W", "Nipawin SK  S0E 1E0"],
    phone: "306-862-4511",
    fax: null,
    hours: ["Monday to Wednesday", "9:00 am – 4:00 pm"],
  },
]

const initialFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  office: "",
  subject: "",
  message: "",
  consent: false,
}

const requiredFields = ["firstName", "lastName", "email", "office", "subject", "message", "consent"]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState(initialFields)
  const [touched, setTouched] = useState({})
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

  const getError = (name) => {
    if (!touched[name] && !attemptedSubmit) return ""
    if (name === "consent") return !fields.consent ? "You must consent to continue." : ""
    if (!fields[name]?.trim()) {
      const labels = {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        office: "Preferred office",
        subject: "Subject",
        message: "Message",
      }
      return `${labels[name] || name} is required.`
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return "Please enter a valid email address."
    }
    return ""
  }

  const isFormValid = requiredFields.every((f) =>
    f === "consent" ? fields.consent : fields[f]?.trim()
  ) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFields((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAttemptedSubmit(true)
    if (!isFormValid) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
    setFields(initialFields)
    setTouched({})
    setAttemptedSubmit(false)
  }

  const inputClass = (name) =>
    `w-full px-3 py-2.5 border focus:outline-none focus:ring-1 text-sm ${
      getError(name)
        ? "border-red-400 focus:ring-red-400"
        : "border-gray-300 focus:ring-[#002548]"
    }`

  return (
    <>
      <div className="bg-[#002548]">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="bg-[#002548] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">Contact Us</h1>
          <div className="w-20 h-1 bg-[#d4a017] mt-6"></div>
        </div>
      </div>

      {/* Office Cards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-[#002548] mb-4">Our Offices</h2>
            <div className="w-20 h-1 bg-[#d4a017] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div key={office.city} className="bg-white p-8 border-t-4 border-[#d4a017] shadow-sm">
                <h3 className="text-xl font-semibold text-[#002548] mb-6">{office.city} Office</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-[#d4a017] flex-shrink-0 mt-0.5" />
                    <div>
                      {office.address.map((line) => (
                        <p key={line} className="text-gray-700 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-[#d4a017] flex-shrink-0 mt-0.5" />
                    <div>
                      <a href={`tel:+1${office.phone.replace(/-/g, "")}`} className="text-gray-700 text-sm hover:text-[#002548]">
                        {office.phone}
                      </a>
                      {office.fax && <p className="text-gray-500 text-sm">Fax: {office.fax}</p>}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-[#d4a017] flex-shrink-0 mt-0.5" />
                    <div>
                      {office.hours.map((h) => (
                        <p key={h} className="text-gray-700 text-sm">{h}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-[#d4a017] flex-shrink-0 mt-0.5" />
                    <a href="mailto:info@tomilawoffice.ca" className="text-gray-700 text-sm hover:text-[#002548]">
                      info@tomilawoffice.ca
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">

            {/* Left */}
            <div>
              <p className="text-[#d4a017] uppercase tracking-widest text-sm font-semibold mb-3">Send a Message</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#002548] mb-6">Schedule a Consultation</h2>
              <div className="w-16 h-1 bg-[#d4a017] mb-8"></div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Tomi Law Office is a general law firm offering a broad range of legal services to our clients.
                With offices in Tisdale and Nipawin, we're here to serve our local communities.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Complete the form and a member of our team will be in touch with you shortly to discuss how
                we can assist with your legal needs.
              </p>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#002548]">Message Sent!</h3>
                  <p className="text-gray-600 max-w-sm">Thank you for reaching out. A member of our team will be in touch shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-[#002548] underline hover:text-[#003a6b]">
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" id="firstName" name="firstName"
                        value={fields.firstName} onChange={handleChange} onBlur={handleBlur}
                        className={inputClass("firstName")}
                      />
                      {getError("firstName") && <p className="text-red-500 text-xs mt-1">{getError("firstName")}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text" id="lastName" name="lastName"
                        value={fields.lastName} onChange={handleChange} onBlur={handleBlur}
                        className={inputClass("lastName")}
                      />
                      {getError("lastName") && <p className="text-red-500 text-xs mt-1">{getError("lastName")}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={fields.email} onChange={handleChange} onBlur={handleBlur}
                      className={inputClass("email")}
                    />
                    {getError("email") && <p className="text-red-500 text-xs mt-1">{getError("email")}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={fields.phone} onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548] text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="office" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Office <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="office" name="office"
                      value={fields.office} onChange={handleChange} onBlur={handleBlur}
                      className={`${inputClass("office")} bg-white appearance-none`}
                    >
                      <option value="">Select an office</option>
                      <option value="tisdale">Tisdale</option>
                      <option value="nipawin">Nipawin</option>
                    </select>
                    {getError("office") && <p className="text-red-500 text-xs mt-1">{getError("office")}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="subject" name="subject"
                      value={fields.subject} onChange={handleChange} onBlur={handleBlur}
                      className={inputClass("subject")}
                    />
                    {getError("subject") && <p className="text-red-500 text-xs mt-1">{getError("subject")}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={fields.message} onChange={handleChange} onBlur={handleBlur}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {getError("message") && <p className="text-red-500 text-xs mt-1">{getError("message")}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox" id="consent" name="consent"
                      checked={fields.consent} onChange={handleChange} onBlur={handleBlur}
                      className="mt-1 w-4 h-4 flex-shrink-0"
                    />
                    <div>
                      <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
                        I consent to receive email correspondence from Tomi Law Office related to my inquiry.
                        I acknowledge that I can opt-out or update my preferences at any time. <span className="text-red-500">*</span>
                      </label>
                      {getError("consent") && <p className="text-red-500 text-xs mt-1">{getError("consent")}</p>}
                    </div>
                  </div>

                  {attemptedSubmit && !isFormValid && (
                    <p className="text-red-500 text-sm font-medium">Please fill in all required fields before submitting.</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#002548] text-white py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#003a6b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
