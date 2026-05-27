"use client"

import { useEffect, useRef } from "react"
import { Building2, Shield, Globe, Stamp, FileText, Calendar } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "CAC Registration",
    description: "Register your business name, limited liability company, or incorporated trustee with the Corporate Affairs Commission — fast and correctly.",
    tag: "Business Name · LLC · Trustees",
  },
  {
    icon: Shield,
    title: "SCUML Registration",
    description: "Special Control Unit against Money Laundering compliance for designated non-financial businesses and professions in Nigeria.",
    tag: "Mandatory Compliance",
  },
  {
    icon: Globe,
    title: "Export License",
    description: "Get your Nigerian Export Promotion Council (NEPC) export license and position your business to trade in global markets.",
    tag: "NEPC · Global Trade",
  },
  {
    icon: Stamp,
    title: "Trademark Registration",
    description: "Protect your brand name, logo, and intellectual property with a registered trademark through the Federal Ministry of Trade.",
    tag: "Brand Protection · IP",
  },
  {
    icon: FileText,
    title: "Affidavit Services",
    description: "Quick, court-certified affidavits for name changes, declarations, business purposes, and any sworn statements you need.",
    tag: "Court-Certified",
  },
  {
    icon: Calendar,
    title: "Annual Returns",
    description: "Keep your company active and avoid penalties by filing your CAC annual returns accurately and on time, every year.",
    tag: "Stay Compliant · Avoid Fines",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="services" ref={sectionRef} className="py-24 px-[5%] bg-secondary">
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          What We Offer
        </div>
        <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
          All the Compliance
          <br />
          Services You Need
        </h2>
        <p className="text-muted-foreground text-sm max-w-lg font-light">
          We take the complexity out of government registration processes so you can focus on your business.
        </p>
      </div>

      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card p-9 transition-colors hover:bg-card/80 group cursor-default"
          >
            <service.icon className="w-8 h-8 text-gold-dim mb-5 transition-colors group-hover:text-primary" />
            <h3 className="font-sans text-base font-semibold tracking-tight mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5">
              {service.description}
            </p>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary border border-border px-3 py-1">
              {service.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
