import React from 'react';
import { Bell } from 'lucide-react';

const NotificationIcon: React.FC = () => {
    return (
        <button 
            className="p-2 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Notificaciones"
        >
            <Bell className="h-6 w-6" />
        </button>
    );
};

export default NotificationIcon;
