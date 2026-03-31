import { ctaHref } from '../App'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
      <p className="mb-2">
        Konkan Village Reset &nbsp;•&nbsp; A real village stay experience
      </p>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-300 underline"
      >
        Message us on WhatsApp
      </a>
    </footer>
  )
}
