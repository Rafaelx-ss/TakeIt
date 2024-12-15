import React from 'react';

interface SocialButtonProps {
    title: string;
    icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ title, icon }) => {
    return (
    <button
        className="cursor-pointer duration-300 hover:scale-125 active:scale-100 group"
        title={title}
    >
        <span className="stroke-textLight group-hover:text-[hsl(var(--dorado))]">
        {icon}
        </span>
    </button>
    );
};

export default SocialButton;
