import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-border py-10 px-[5%] flex flex-wrap items-center justify-between gap-4">
      <Link href="/" className="font-sans font-bold text-base text-foreground">
        Oatify<span className="text-primary">media</span>
      </Link>

      <div className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Oatifymedia. All rights reserved.
      </div>

      <div className="flex gap-6">
        <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Contact
        </Link>
        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
