import Card from '@/components/card';
import HeaderPrincipal from '@/components/header_principal';
import SearchAndFilter from '@/components/search_and_filter';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col h-screen font-[jazmin]">
      {/* Parte superior (40% de la altura) */}
      <div className="bg-verde1-custom h-[50%] relative text-white p-6 bg-fixed">
        <div className="text-center">
          <h1 className="text-3xl font-bold">PAQUETES DE SERVICIOS</h1>
          <HeaderPrincipal />
        </div>
        <div className='pt-12 grid grid-cols-6 gap-4 auto-cols-max'>
          <h2 className='font-bold col-start-2 w-64'>Planes empresariales</h2>
          <p className='w-64 text-[12px] col-start-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet consectetur adipisicing elit. Sapiente quos ea eligendi reiciendis, quod inventore laudantium vitae dolores. </p>
        </div>

        <img src="/assets/images/orquidea.png" alt="Imagen" className="pt-8 absolute bottom-0 right-0 w-60 h-full max-h-64" />

      </div>

      {/* Parte inferior (60% de la altura) */}
      <div className="bg-white h-[50%] justify-items-center">
        <div className='pt-4'>
          <SearchAndFilter />
        </div>
        <div className="p-6">
          <div className='grid grid-cols-2'>
            <h3 className='col-start-1 col-end-3 font-bold'>Más populares</h3>
            <a className='col-end-7' href="#">ver todos</a>
          </div>
          <div className='pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            <Card
              time="6 meses"
              price={600}
              title="ESTANDAR"
              description="Esta es una descripción corta de la tarjeta, con algo de información importante."
              buttonText="ADQUIRIR"
            />
            <Card
              time="12 meses"
              price={1000}
              title="CONFORT"
              description="Esta es una descripción corta de la tarjeta, con algo de información importante."
              buttonText="ADQUIRIR"
            />
            <Card
              time="2 años"
              price={2000}
              title="PREMIUM"
              description="Esta es una descripción corta de la tarjeta, con algo de información importante."
              buttonText="ADQUIRIR"
            />
            <Card
              time="6 meses"
              price={600}
              title="ESTANDAR"
              description="Esta es una descripción corta de la tarjeta, con algo de información importante."
              buttonText="ADQUIRIR"
            />
            <Card
              time="12 meses"
              price={1000}
              title="CONFORT"
              description="Esta es una descripción corta de la tarjeta, con algo de información importante."
              buttonText="ADQUIRIR"
            />
            <Card
              time="2 años"
              price={2000}
              title="PREMIUM"
              description="Esta es una descripción corta de la tarjeta, con algo de información importante."
              buttonText="ADQUIRIR"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
