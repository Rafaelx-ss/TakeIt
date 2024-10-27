import React, {useState} from "react";
import {Bell, User, Menu} from "lucide-react";

const Header = () => {
    return(
    <header className="bg-surface text-text p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
        <p className="text-2xl font-bold text-yellow-300">Take It! </p>
        <nav className="hidden md:flex items-center space-x-4">
        <button className="btn-outline">Crear evento</button>
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-sans py-2 px-4 rounded">Iniciar Sesión</button>
        <button className="p-2 hover:text-accent">
            <Bell className="bg-transparent"></Bell>
        </button>
        <button className="p-2 hover:text-accent">
            <User></User>
        </button>
        </nav>
        </div>

        
    </header>
    );
}

export default Header;