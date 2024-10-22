import React from 'react';
import BrrBusqueda from './BrrBusqueda';
import BrrUbicacion from './BrrUbicacion';
import BrrFecha from './BrrFecha';
import BotonFiltro from './BotonFiltro';

const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center justify-center space-x-4 bg-surface p-2 rounded-md shadow-md">
            <BrrBusqueda />
            <BrrUbicacion />
            <BrrFecha />
            <BotonFiltro />
        </div>
    );
};

export default SearchBar;
