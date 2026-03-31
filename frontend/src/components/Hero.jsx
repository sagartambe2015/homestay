import { ctaHref } from '../App'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-4 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Escape the Noise.<br />Experience Real Konkan Village Life.
        </h1>
        <p className="text-gray-200 text-lg mb-8">
          Stay with a local family, enjoy home-cooked meals,<br className="hidden md:block" />
          visit a peaceful temple, and truly slow down.
        </p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-green-800 transition-colors shadow-lg"
        >
          Plan Your Stay
        </a>
        <p className="text-gray-300 text-sm mt-4">
          2-Day Village Reset &nbsp;•&nbsp; Limited slots
        </p>
      </div>
    </section>
  )
}
