import React from 'react';

interface CardProps {
  time: string;
  title: string;
  price: number;
  description: string;
  buttonText: string;
  //onButtonClick: () => void; // Función que se ejecuta cuando se hace clic en el botón
}

const Card: React.FC<CardProps> = ({ time, title, price, description, buttonText }) => {
  return (
    <div className="max-w-sm rounded-lg text-azul-custom shadow-md hover:text-white hover:bg-gradient-to-t from-verde3-custom from-30% to-verde2-custom to-70%">
        {/**/}
      
      <div className="p-4 ">
        {/*tiempo del servicio*/}
        <p className="text-azul-custom/50 text-xl font-bold ">{time}</p>

        {/* Título de la tarjeta */}
        <p className="text-xl font-semibold text-center">{title}</p>
        
        {/*precio del servicio*/}
        <h2 className="text-2xl font-semibold  text-center">${price}</h2>
        <hr />
        
        {/* Descripción de la tarjeta */}
        <p className="text-[8px] mt-2">{description}</p>

        {/* Botón de acción */}
        <button
          className="mt-4 px-4 py-2 bg-white text-azul-custom hover:bg-verde2-custom hover:text-white transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;