import React from 'react';
import { User } from 'lucide-react';

const UserIcon: React.FC = () => {
    return (
        <button 
            className="p-2 text-white hover:text-accent transition-colors duration-200"
            aria-label="Perfil de usuario"
        >
            <User className="h-6 w-6" />
        </button>
    );
};

export default UserIcon;
