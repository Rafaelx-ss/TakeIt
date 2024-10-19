import React from "react";

interface EventCardProps {
    title: string;
    image: string;
    date: string;
    location: string;
    price: string;
    attendees: number;
}

const EventCard: React.FC<EventCardProps> = ({ title, image, date, location, price, attendees }) => {
    return (
        <div className="card bg-surface p-4 shadow-md mb-6">
        <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
        <h3 className="text-xl text-primary">{title}</h3>
        <p className="text-text-light">{location}</p>
        <p className="text-text-light">{date}</p>
        <p className="text-accent font-bold">{price}</p>
        <p className="text-text-light">Asistentes: {attendees}</p>
        <button className="btn-primary mt-4">Inscribirse</button>
        </div>
    );
};

export default EventCard;
