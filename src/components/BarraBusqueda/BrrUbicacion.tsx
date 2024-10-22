import React from 'react';
import { MapPin } from 'lucide-react';

const LocationInput: React.FC = () => {
    return (
        <div className="flex items-center border border-primary rounded-md overflow-hidden flex-grow max-w-xs bg-white">
            <MapPin className="text-background mx-2" />
            <input
                type="text"
                placeholder="Ubicación"
                className="bg-transparent outline-none text-background placeholder:textlight px-2 py-1 w-full"
            />
        </div>
    );
};

export default LocationInput;
