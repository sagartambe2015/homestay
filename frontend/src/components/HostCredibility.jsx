export default function HostCredibility() {
  return (
    <section className="bg-green-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Hosted by local families
          </h2>
          <p className="text-green-100 text-lg leading-relaxed">
            Hosted by local families in our native village in Konkan.
            These are real homes — not resorts. You stay as a guest, eat with the family,
            and experience life the way it has been lived here for generations.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <img
            src="/images/host-home-1.jpg"
            alt="Host home"
            className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-2xl opacity-90"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <img
            src="/images/host-home-2.jpg"
            alt="Village view"
            className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-2xl opacity-90"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      </div>
    </section>
  )
}
