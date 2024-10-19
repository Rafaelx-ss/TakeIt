import React, { useState } from "react";
import { Search, MapPin, Calendar, Filter } from "lucide-react";

const EventSearch = () => {
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-text mb-6">Descubre eventos increibles</h2>
            <div className="bg-surface shadow-sm rounded-lg p-4 flex flex-wrap items-center gap-4">
                <div className="flex-grow flex items-center bg-gray-100 rounded-lg p-2">
                    <Search className="text-gray-500 mr-2" size={20}/>
                    <input 
                        type="text"  
                        placeholder="Buscar eventos..."
                        className="bg-transparent outline-none text-surface flex-grow"
                    />
                </div>
                <div className="flex items-center bg-gray-100 rounded-lg p-2">
                    <MapPin className="text-gray-500 mr-2" size={20}/>
                    <input 
                        type="text"  
                        placeholder="Ubicación"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="bg-transparent outline-none text-surface"
                    />
                </div>
                <div className="flex items-center bg-gray-100 rounded-lg p-2">
                    <Calendar className="text-gray-500 mr-2" size={20}/>
                    <input 
                        type="date"  
                        placeholder="Ubicación"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-transparent outline-none text-surface"
                    />
                </div>
                <button className="btn-primary flex items-center">
                    <Filter size={18} className="mr-2"/>
                    Filtrar
                </button>
            </div>
        </section>
    )
}

export default EventSearch;