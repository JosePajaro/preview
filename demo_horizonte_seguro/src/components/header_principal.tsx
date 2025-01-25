import React from 'react';

const HeaderPrincipal: React.FC = () => {
    return (
        <header className=" inline-flex mt-4 flex bg-[#ffff] justify-center gap-2 rounded-full text-azul-custom">
            <a href="#" className="hover:text-white hover:bg-verde2-custom py-2 px-4 rounded-l-full transition-all duration-5">Personal</a>
            <a href="#" className="hover:text-white hover:bg-verde2-custom py-2 px-4 rounded-full transition-all duration-5">Familiar</a>
            <a href="#" className="hover:text-white hover:bg-verde2-custom py-2 px-4 rounded-r-full transition-all duration-5">Empresas</a>
        </header>
    )
}

export default HeaderPrincipal;