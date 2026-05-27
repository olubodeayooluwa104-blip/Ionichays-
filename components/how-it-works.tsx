"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Reach Out to Us",
    description: "Contact us via WhatsApp, email, or the form below. Tell us what service you need and we'll guide you from there.",
  },
  {
    number: "02",
    title: "Submit Your Details",
    description: "We'll request only the documents and information needed. No unnecessary stress — we handle all the paperwork.",
  },
  {
    number: "03",
    title: "Get Your Certificate",
    description: "We process and file everything, then deliver your approved documents directly to you — within our guaranteed timeframe.",
  },
]

export function HowItWorks() {
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
    <section id="how" ref={sectionRef} className="py-24 px-[5%] bg-background">
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          The Process
        </div>
        <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
          Done in Three
          <br />
          Simple Steps
        </h2>
        <p className="text-muted-foreground text-sm max-w-lg font-light">
          {"We've simplified the entire compliance process into an easy, guided experience."}
        </p>
      </div>

      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative p-8 border border-border bg-card transition-colors hover:border-primary"
          >
            <div className="font-sans text-5xl font-bold text-primary/10 leading-none mb-4">
              {step.number}
            </div>
            <h3 className="font-sans text-base font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
