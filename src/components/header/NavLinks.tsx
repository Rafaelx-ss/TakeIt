import React from 'react';

const NavLinks: React.FC = () => {
    return (
        <nav className="hidden md:block">
            <ul className="flex space-x-6">
                <li>
                    <a 
                        href="/" 
                        className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                        aria-current="page"
                    >
                        Inicio
                    </a>
                </li>
                <li>
                    <a 
                        href="/login" 
                        className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                    >
                        Inicio de sesión
                    </a>
                </li>
                <li>
                    <a 
                        href="/profile" 
                        className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                    >
                        Perfil
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
