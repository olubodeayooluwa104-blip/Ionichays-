import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-[5%] pt-32 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Grid Lines */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 border border-border px-4 py-1.5 text-xs font-medium text-primary tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
          {"Nigeria's Business Compliance Partner"}
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
          From Registration
          <br />
          to <span className="text-primary">Compliance</span> —
          <br />
          We Handle It All.
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-base text-muted-foreground max-w-xl mb-10 font-light leading-relaxed">
          CAC registration, SCUML, Export License, Trademark, Affidavit, Annual Returns — fast, accurate, and stress-free.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground font-sans font-semibold text-sm px-6 py-3 hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all"
          >
            Start Your Registration
          </Link>
          <Link
            href="#services"
            className="bg-transparent text-foreground font-sans font-medium text-sm px-6 py-3 border border-foreground/20 hover:border-primary hover:text-primary transition-all"
          >
            View Services
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-delay-4 flex flex-wrap gap-6 md:gap-12 mt-16 pt-10 border-t border-border">
          <div>
            <div className="font-sans text-2xl font-bold text-primary">500+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Businesses Registered</div>
          </div>
          <div>
            <div className="font-sans text-2xl font-bold text-primary">48hrs</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Avg. Turnaround</div>
          </div>
          <div>
            <div className="font-sans text-2xl font-bold text-primary">100%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">CAC Compliant</div>
          </div>
        </div>
      </div>
    </section>
  )
}
