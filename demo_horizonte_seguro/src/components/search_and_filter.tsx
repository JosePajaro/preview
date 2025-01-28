import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React  from 'react';

const SearchAndFilter: React.FC = () => {
    return (
        <div className="col-start-2">
            {/* Campo de búsqueda */}
            <input
                type="text"
                className="px-4 py-2 w-80 bg-verde2-custom/25 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:verde3-custom"
                placeholder="Buscar paquetes de servicios, empresas, etc..."
            />

            {/* Botón de búsqueda */}
            <button
                className="px-4 py-2 bg-verde2-custom text-white rounded-sm hover:bg-verde2-custom focus:outline-none focus:ring-2 focus:verde3-custom"
            >
                Buscar
            </button>

            {/* Botón de filtro */}
            <button
                className="inline-flex px-4 py-2 ml-4 bg-verde2-custom text-white rounded-sm hover:verde2-custom focus:outline-none focus:ring-2 focus:verde3-custom"
            >
                <span>Filtrar</span>
                <ChevronDownIcon className="ml-2 h-6 w-6" />
            </button>
        </div>
    );
}

export default SearchAndFilter;