import React from "react";
import { events } from "./data/events"; 
import EventCard from "./components/Card"; 

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-text font-poppins p-6">
      <h2 className="text-3xl font-bold text-text mb-6">Eventos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16">
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
            price={event.price}
            attendees={event.attendees}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
