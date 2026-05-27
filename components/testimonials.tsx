"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  {
    text: "Oatifymedia got my business name registered within 24 hours. I was shocked at how fast and easy the whole process was. Highly recommend!",
    name: "Adaeze Okafor",
    role: "Founder, AdaStyle Boutique",
    initials: "AO",
  },
  {
    text: "I needed my SCUML registration done urgently. They handled everything professionally and kept me updated throughout. Excellent service.",
    name: "Babatunde Musa",
    role: "CEO, Musa Logistics",
    initials: "BM",
  },
  {
    text: "Got my trademark registered without any stress. The team at Oatifymedia is knowledgeable, responsive, and very affordable. Will use again!",
    name: "Fatima Ibrahim",
    role: "Brand Owner, FI Collections",
    initials: "FI",
  },
]

export function Testimonials() {
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
    <section id="testimonials" ref={sectionRef} className="py-24 px-[5%] bg-background">
      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-14">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          Client Stories
        </div>
        <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight">
          What Our Clients Say
        </h2>
      </div>

      <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-card border border-border p-8 transition-colors hover:border-gold-dim"
          >
            <div className="text-primary text-sm tracking-widest mb-4">★★★★★</div>
            <p className="text-base text-foreground/75 leading-relaxed italic font-light mb-6">
              {`"${testimonial.text}"`}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/15 border border-border flex items-center justify-center font-sans font-bold text-sm text-primary">
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
