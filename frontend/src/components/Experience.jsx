const days = [
  {
    day: 'Day 1',
    color: 'bg-green-50 border-green-200',
    activities: ['Arrive at the village', 'Evening village walk', 'Home-cooked dinner with the family'],
  },
  {
    day: 'Day 2',
    color: 'bg-amber-50 border-amber-200',
    activities: ['Morning temple visit + aarti', 'Relaxed afternoon', 'Optional beach trip (~1 hr away)'],
  },
  {
    day: 'Day 3',
    color: 'bg-blue-50 border-blue-200',
    activities: ['Traditional breakfast', 'Departure at your own pace'],
  },
]

export default function Experience() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Your 2-Day Reset
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {days.map(({ day, color, activities }) => (
            <div key={day} className={`rounded-2xl border p-6 ${color}`}>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">{day}</h3>
              <ul className="space-y-2">
                {activities.map((a) => (
                  <li key={a} className="text-gray-600 flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
