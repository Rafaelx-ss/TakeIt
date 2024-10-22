import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="relative flex items-center px-4 py-1.5 overflow-hidden font-medium transition-all bg-surface border border-accent rounded-md group"
        >
            <span
                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded group-hover:-mr-4 group-hover:-mt-4"
            >
                
            </span>
            <span
                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded group-hover:-ml-4 group-hover:-mb-4"
            >
                
            </span>
            <span
                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-accent rounded-md group-hover:translate-x-0"
            ></span>
            <span
                className="relative w-full text-left text-accent transition-colors duration-200 ease-in-out group-hover:text-background"
            >
                {label}
            </span>
        </button>
    );
};

export default Button;
