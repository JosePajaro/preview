import Card from '@/components/card';
import HeaderPrincipal from '@/components/header_principal';
import SearchAndFilter from '@/components/search_and_filter';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col h-screen font-[jazmin]">
      {/* Parte superior (40% de la altura) */}
      <div className="bg-verde1-custom h-[40%] relative text-white p-6 bg-fixed">
        <div className="text-center">
          <h1 className="text-3xl font-bold">PAQUETES DE SERVICIOS</h1>
          <HeaderPrincipal />
        </div>
        <div className='pt-8'>
          <h2 className='font-bold'>Planes empresariales</h2>
          <p className='w-64 text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet consectetur adipisicing elit. Sapiente quos ea eligendi reiciendis, quod inventore laudantium vitae dolores.</p>
        </div>

        <img src="/assets/images/orquidea.png" alt="Imagen" className="absolute bottom-0 right-0 w-48 h-9/10" />

      </div>

      {/* Parte inferior (60% de la altura) */}
      <div className="bg-white h-[60%] p-6">
        <SearchAndFilter />
        <div className='pt-4 flex justify-between'>
          <h3 className='font-bold'>Más populares</h3>
          <a href="#">ver todos</a>
        </div>
        <div className="justify-items-stretch items-center p-6 grid grid-cols-3 gap-3 ">
          <Card
            time="6 meses"
            price={600}
            title="ESTANDAR"
            description="Esta es una descripción corta de la tarjeta, con algo de información importante."
            buttonText="Comprarla"
          />
          <Card
            time="12 meses"
            price={1000}
            title="CONFORT"
            description="Esta es una descripción corta de la tarjeta, con algo de información importante."
            buttonText="Comprarla"
          />
          <Card
            time="2 años"
            price={2000}
            title="PREMIUM"
            description="Esta es una descripción corta de la tarjeta, con algo de información importante."
            buttonText="Comprarla"
          />
          <Card
            time="6 meses"
            price={600}
            title="ESTANDAR"
            description="Esta es una descripción corta de la tarjeta, con algo de información importante."
            buttonText="Comprarla"
          />
          <Card
            time="12 meses"
            price={1000}
            title="CONFORT"
            description="Esta es una descripción corta de la tarjeta, con algo de información importante."
            buttonText="Comprarla"
          />
          <Card
            time="2 años"
            price={2000}
            title="PREMIUM"
            description="Esta es una descripción corta de la tarjeta, con algo de información importante."
            buttonText="Comprarla"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
