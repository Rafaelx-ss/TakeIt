import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuIconProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className="md:hidden p-2 text-white hover:text-gray-300"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
        >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
    );
};

export default MenuIcon;
