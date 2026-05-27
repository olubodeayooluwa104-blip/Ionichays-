"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Smartphone,
    label: "WhatsApp",
    value: "070 1780 6343",
    href: "https://wa.me/2347017806343",
  },
  {
    icon: Mail,
    label: "Email",
    value: "oatifymedia@gmail.com",
    href: "mailto:oatifymedia@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria (Online — We Serve Nationwide)",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 8am – 6pm\nSaturday: 9am – 3pm",
  },
]

const services = [
  "CAC Registration",
  "SCUML Registration",
  "Export License",
  "Trademark Registration",
  "Affidavit",
  "Annual Returns",
  "Multiple Services",
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Build WhatsApp message
    const message = `Hello Oatifymedia!

*New Inquiry*

*Name:* ${formData.fullName || "Not provided"}
*Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Service Needed:* ${formData.service || "Not specified"}

*Message:*
${formData.message || "No additional message"}`;

    // Encode and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/2347017806343?text=${encodedMessage}`
    window.location.href = whatsappUrl
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-[5%] bg-secondary">
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          Get In Touch
        </div>
        <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
          Ready to Get
          <br />
          Your Business Legal?
        </h2>
        <p className="text-muted-foreground text-sm max-w-lg font-light">
          Reach out today and let&apos;s get started. We typically respond within 1 hour during business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        {/* Contact Info */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col gap-8">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <div className="w-11 h-11 min-w-11 bg-primary/10 border border-border flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  {item.label}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-base text-foreground/75 font-light hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base text-foreground/75 font-light whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-card border border-border text-foreground font-sans text-base px-4 py-3.5 outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+234..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-card border border-border text-foreground font-sans text-base px-4 py-3.5 outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-card border border-border text-foreground font-sans text-base px-4 py-3.5 outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Service Needed
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="bg-card border border-border text-foreground font-sans text-base px-4 py-3.5 outline-none transition-colors focus:border-primary appearance-none cursor-pointer"
            >
              <option value="">Select a service...</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-secondary">
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message (Optional)
            </label>
            <textarea
              rows={4}
              placeholder="Tell us more about what you need..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-card border border-border text-foreground font-sans text-base px-4 py-3.5 outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/50 resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-sans font-semibold text-sm py-3.5 hover:bg-accent transition-colors"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}
