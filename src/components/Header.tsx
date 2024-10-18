import React, { useState } from "react";
import { Bell, User, Menu, X} from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="bg-surface text-text p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2x1 font-bold text-accent">Take It!</h1>
                <nav className="hidden md:flex items-center space-x-4">
                    <button className="btn-outline">Crear Evento</button>
                    <button className="btn-primary">Iniciar Sesión</button>
                    <button className="p-2 text-text hover:text-accent">
                        <Bell size={20} />
                    </button>
                    <button className="p-2 text-text hover:text-accent">
                        <User size={20} />
                    </button>
                </nav>

                <button className="md:hidden text-text-light" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <button className="btn-outline w-full">Crear Evento</button>
                    <button className="btn-primary w-full">Iniciar Sesión</button>
                    <div className="flex justify-center space-x-4">
                        <button className="p-2 text-text-light hover:text-accent">
                            <Bell size={20} />
                        </button>
                        <button className="p-2 text-text-light hover:text-accent">
                            <User size={20} />
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;