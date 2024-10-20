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

        //Efecto del brillo en la orilla (Linea#17)
        <div className="relative drop-shadow-xl w-full h-[28rem] overflow-hidden rounded-xl bg-[#3d3c3d]">
            <div className="absolute w-full h-full bg-[#D4AF37] blur-[100px] -left-1/2 -top-1/2"></div>

            <div className="absolute flex flex-col z-[1] opacity-95 rounded-xl inset-0.5 bg-[#1a1a1a] p-4">
                <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl text-primary">{title}</h3>
                <p className="text-textlight">{location}</p>
                <p className="text-textlight">{date}</p>
                <p className="text-accent font-bold">{price}</p>
                <p className="text">Asistentes: {attendees}</p>
                
                <div className="mt-auto">
                    <button
                        aria-label="Inscribirse"
                        className="w-full px-8 py-2 text-white font-bold text-lg rounded-full 
                                    shadow-lg transition-transform transform 
                                    bg-transparent border-2 border-[#D4AF37] 
                                    hover:scale-105 hover:border-yellow-600 
                                    hover:shadow-yellow-500/50 hover:shadow-2xl 
                                    focus:outline-none"
                        id="inscriptionButton">
                        Inscribirse
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;