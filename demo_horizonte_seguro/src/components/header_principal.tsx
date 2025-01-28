import React from 'react';

const HeaderPrincipal: React.FC = () => {
    return (
        <header className="inline-flex mt-4 gap-2 bg-[#ffff] rounded-full text-azul-custom">
            <a href="#" className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-verde2-custom py-2 px-4 rounded-l-full transition-all duration-5">Personal</a>
            <a href="#" className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-verde2-custom py-2 px-4 rounded-full transition-all duration-5">Familiar</a>
            <a href="#" className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-verde2-custom py-2 px-4 rounded-r-full transition-all duration-5">Empresas</a>
        </header>
    )
}

export default HeaderPrincipal;