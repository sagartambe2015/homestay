import { ctaHref } from '../App'

export default function FinalCTA() {
  return (
    <section className="bg-amber-50 py-24 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to take a break from city life?
        </h2>
        <p className="text-gray-500 mb-8">Small groups only. Limited availability.</p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 text-white text-lg font-semibold px-10 py-4 rounded-full hover:bg-green-800 transition-colors shadow-md"
        >
          Plan Your Stay
        </a>
        <p className="text-gray-400 text-sm mt-4">
          Opens WhatsApp — we'll get back to you within a few hours.
        </p>
      </div>
    </section>
  )
}
