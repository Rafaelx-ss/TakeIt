import React, { useState } from 'react';
import MenuIcon from './IconoMenu';
import NotificationIcon from './IconoNotificacion';
import UserIcon from './IconoUsuario';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-surface p-4 shadow-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">

                    <MenuIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    <NavLinks/>

                    <h1 className="absolute left-1/2 transform -translate-x-1/2">
                        <a 
                            href="/" 
                            className="text-accent text-3xl font-bold hover:opacity-90 transition-opacity font-['Poppins']"
                            style={{ letterSpacing: '0.05em' }}
                        >
                            Take IT
                        </a>
                    </h1>
                    <div className="flex items-center space-x-4">
                        <NotificationIcon />
                        <UserIcon />
                    </div>
                </div>

                <MobileMenu isOpen={isMenuOpen} />
            </div>
        </header>
    );
};

export default Header;
