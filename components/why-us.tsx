"use client"

import { useEffect, useRef } from "react"
import { Zap, CheckCircle, Users, DollarSign } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Most registrations are completed within 24–72 hours. We don't keep you waiting.",
  },
  {
    icon: CheckCircle,
    title: "100% Accuracy Guaranteed",
    description: "Every filing is reviewed before submission. Zero errors, zero rejections.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A real person guides you through every step. No bots, no confusion.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. You know exactly what you're paying before we begin.",
  },
]

export function WhyUs() {
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
    <section id="why" ref={sectionRef} className="py-24 px-[5%] bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Why Oatifymedia
          </div>
          <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 font-serif text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-balance">
            We Make Compliance
            <br />
            Feel Easy
          </h2>

          <ul className="flex flex-col gap-6">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 flex gap-5 items-start"
              >
                <div className="w-11 h-11 min-w-11 bg-primary/10 border border-border flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative h-[420px] lg:h-[480px] border border-border bg-card flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="font-serif text-7xl md:text-8xl font-extrabold text-primary relative">
            500+
          </div>
          <div className="w-10 h-px bg-border relative" />
          <div className="text-sm text-muted-foreground text-center max-w-52 leading-relaxed relative">
            Businesses successfully registered and compliant across Nigeria
          </div>
          <div className="w-10 h-px bg-border relative" />
          <div className="font-serif text-4xl md:text-5xl font-extrabold text-primary/50 relative">
            6 Services
          </div>
          <div className="text-sm text-muted-foreground text-center max-w-52 leading-relaxed relative">
            End-to-end compliance under one roof
          </div>
        </div>
      </div>
    </section>
  )
}
