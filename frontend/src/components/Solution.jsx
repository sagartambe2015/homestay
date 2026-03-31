import { ctaHref } from '../App'

const items = [
  { icon: '🏡', text: 'Stay in a real Konkan home' },
  { icon: '🍛', text: 'Eat traditional home-cooked meals' },
  { icon: '🪔', text: 'Visit a peaceful local temple' },
  { icon: '🌿', text: 'Enjoy quiet village life at your own pace' },
]

export default function Solution() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          A Simple Village Experience
        </h2>
        <ul className="space-y-5 text-left inline-block mb-10">
          {items.map(({ icon, text }) => (
            <li key={text} className="flex items-start gap-3 text-lg text-gray-700">
              <span className="text-2xl">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white text-base font-semibold px-7 py-3 rounded-full hover:bg-green-800 transition-colors"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  )
}
