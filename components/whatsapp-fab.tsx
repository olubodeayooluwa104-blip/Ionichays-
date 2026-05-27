import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppFab() {
  return (
    <Link
      href="https://wa.me/2347017806343"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  )
}
