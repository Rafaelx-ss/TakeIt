import React from 'react';
import BottonReactivo from './BotonReactivo';

const NavLinks: React.FC = () => {
    return (
        <nav className="hidden md:block">
            <ul className="flex space-x-6">
                <li>
                    <BottonReactivo label="Iniciar Sesión" />
                </li>
                <li>
                    <BottonReactivo label="Crear Evento" />
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
