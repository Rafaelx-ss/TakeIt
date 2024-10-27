import React, { useState } from 'react'
import { MapPin, Clock, Heart, Share2, Users } from 'lucide-react'

interface Event {
  image: string;
  title: string;
  price: string;
  category: string;
  date: string;
  location: string;
  attendees: number;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="card flex flex-col h-full">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-text line-clamp-2">{event.title}</h3>
          <span className="bg-accent text-primary text-sm font-bold px-2 py-1 rounded ml-2 whitespace-nowrap">
            {event.price}
          </span>
        </div>
        <p className="text-sm text-accent font-medium mb-2">{event.category}</p>
        <p className="flex items-center text-sm text-text-light mb-2">
          <Clock className="w-4 h-4 mr-2 text-accent" /> {event.date}
        </p>
        <p className="flex items-center text-sm text-text-light mb-4">
          <MapPin className="w-4 h-4 mr-2 text-accent" /> {event.location}
        </p>
        <div className="flex items-center justify-between mb-4 mt-auto">
          <span className="flex items-center text-sm text-text-light">
            <Users className="w-4 h-4 mr-2 text-accent" />
            {event.attendees} asistentes
          </span>
          <div className="flex space-x-2">
            <button
              className={`p-2 rounded-full ${isFavorite ? 'text-error' : 'text-text-light'}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 text-text-light rounded-full hover:bg-secondary">
              <Share2 size={20} />
            </button>
          </div>
        </div>
        <button className="btn-primary w-full mt-2">Inscribirse</button>
      </div>
    </div>
  )
}

export default EventCard