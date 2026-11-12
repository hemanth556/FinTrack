
import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))

    setSuccess(false)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must contain at least 10 characters'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setSuccess(true)

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setErrors({})
  }

  return (
    <section id="contact" className="bg-[#F8FAF9] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Get in Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Let's talk about your
            <span className="text-emerald-500"> finances.</span>
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Have questions about FinTrack? We'd love to hear from you.
            Send us a message and let's get started.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-200/50 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="bg-[#102B24] p-8 text-white lg:col-span-2 lg:p-12">
            <h3 className="text-2xl font-bold">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              We're here to help you make smarter financial decisions.
              Reach out to our team.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us</p>
                  <p className="font-medium">hello@fintrack.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us</p>
                  <p className="font-medium">+1 800 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Available Worldwide</p>
                </div>
              </div>

            </div>

            <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium">
                Your financial journey starts here.
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Take the first step towards better money management with FinTrack.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:col-span-3 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form and we'll get back to you.
            </p>

            {success && (
              <div
                role="status"
                className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700"
              >
                <CheckCircle2 size={20} />
                Your message has been submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="demo">Request a Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="pricing">Pricing Questions</option>
                </select>

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 font-semibold text-white transition hover:bg-emerald-600 sm:w-auto"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
