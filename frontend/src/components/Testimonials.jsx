const testimonials = [
  {
    quote: 'Very peaceful and authentic experience. Felt completely disconnected from city stress.',
    name: 'Priya M.',
    location: 'Mumbai',
  },
  {
    quote: 'Felt like home. The food was amazing and the family was so warm and welcoming.',
    name: 'Rahul & Sneha',
    location: 'Pune',
  },
  {
    quote: 'The temple visit at dawn was unforgettable. Nothing touristy — just real village life.',
    name: 'Ankit S.',
    location: 'Mumbai',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          What guests say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, location }) => (
            <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-700 italic mb-4">"{quote}"</p>
              <p className="font-semibold text-gray-800 text-sm">{name}</p>
              <p className="text-gray-400 text-xs">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
