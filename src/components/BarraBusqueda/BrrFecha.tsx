import React from 'react';
import { Calendar } from 'lucide-react';

const DateInput: React.FC = () => {
    return (
        <div className="flex items-center border border-primary rounded-md overflow-hidden flex-grow max-w-xs bg-white">
            <Calendar className="text-background mx-2" />
            <input
                type="date"
                className="bg-transparent outline-none text-background placeholder:textlight px-2 py-1 w-full"
            />
        </div>
    );
};

export default DateInput;
