import { ctaHref } from '../App'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-serif text-green-800 font-semibold text-lg">
          Konkan Village Reset
        </span>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-green-800 transition-colors"
        >
          Plan Your Stay
        </a>
      </div>
    </nav>
  )
}
