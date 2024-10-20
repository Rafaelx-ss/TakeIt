import React from 'react';

interface MobileMenuProps {
    isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
                <li>
                    <a 
                        href="/" 
                        className="block text-accent hover:text-gray-300 transition-colors duration-200"
                        aria-current="page"
                    >
                        Inicio
                    </a>
                </li>
                <li>
                    <a 
                        href="/login" 
                        className="block text-accent hover:text-gray-300 transition-colors duration-200"
                    >
                        Inicio de sesión
                    </a>
                </li>
                <li>
                    <a 
                        href="/profile" 
                        className="block text-accent hover:text-gray-300 transition-colors duration-200"
                    >
                        Crear evento
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MobileMenu;
