import React, { useState } from "react";
import { Search, MapPin, Calendar, Filter } from "lucide-react";

const EventSearch = () => {
    return(
        <section className="mb-12">
            <h2 className="font-bold text-xl">Descubre Eventos increibles</h2>
            <div className="bg-surface shadow-sm rounded-lg p-4 flex flex-wrap items-center gap-4">
            
                <div className="flex-grow flex items-center bg-gray-100 rounded-lg p-2">
                <Search className="text-gray-500 mr-2"/>
                <input type="text" placeholder="Buscar un evento..." className="bg-transparent outline-none text-surface flex-grow"/>
                </div>
                <div className="flex-grow flex items-center bg-gray-100 rounded-lg p-2">
                <MapPin className="text-gray-500 mr-2"/>
                <input type="text" placeholder="Ubicación" className="bg-transparent outline-none text-surface flex-grow"/>
                </div>
                <div className="flex-grow flex items-center bg-gray-100 rounded-lg p-2">
                <Calendar className="text-gray-500 mr-2"/>
                <input type="date" placeholder="" className="bg-transparent outline-none text-surface flex-grow"/>
                </div>
                <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-sans py-2 px-4 rounded flex items-center"><Filter></Filter>Filtrar</button>
            </div>
        </section>

    )
} 

export default EventSearch;