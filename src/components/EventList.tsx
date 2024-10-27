import React, { useState } from 'react'
import EventCard from './EventCard'
import { events } from '../data/events'

const EventList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const categories = ['Todos', 'Música', 'Deportes', 'Arte', 'Tecnología', 'Gastronomía', 'Negocios', 'Moda']

  const filteredEvents = selectedCategory === 'Todos'
    ? events
    : events.filter(event => event.category === selectedCategory)

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-text mb-6">Eventos Destacados</h2>
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-accent text-primary'
                : 'bg-secondary text-text hover:bg-secondary/80'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default EventList