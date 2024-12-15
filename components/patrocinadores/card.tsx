import React from 'react';

type CardProps = {
  logo?: string;
  title?: string;
  subtitle?: string;
  price?: string;
  description?: string;
  status?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  logo,
  title,
  subtitle,
  price,
  description,
  status,
  children,
  className = '',
}) => {
  return (
    <div className={`card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative ${className}`}>      
      <div className="px-8 py-10 text-center">
        {logo && <img src={logo} alt={title} className="h-16 w-16 object-contain mb-4" />}
        {title && <div className="uppercase font-bold text-xl">{title}</div>}
        {subtitle && <div className="text-gray-300 uppercase tracking-widest">{subtitle}</div>}
        {price && (
          <div className="text-gray-400 mt-8">
            <p className="font-bold">{price}</p>
            <p>{description}</p>
          </div>
        )}
        {status && (
          <span
            className={`px-3 py-1 text-xs rounded-full font-medium ${status === 'Activo' ? 'bg-success text-black' : 'bg-error text-white'}`}
          >
            {status}
          </span>
        )}
        {children}
      </div>
      <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
    </div>
  );
};
