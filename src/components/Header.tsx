import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-primary p-4 flex justify-between items-center">
        <h1 className="text-accent text-3xl font-bold">Take IT</h1>
        <nav>
            <ul className="flex space-x-4">
            <li><a href="#" className="text-text-light hover:text-accent">Inicio</a></li>
            <li><a href="#" className="text-text-light hover:text-accent">inicio de sesion</a></li>
            <li><a href="#" className="text-text-light hover:text-accent">Perfil</a></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;
