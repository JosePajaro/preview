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
    <div className="transform transition-all duration-300 ease-in-out hover:scale-105 size-40 h-64 rounded-sm text-azul-custom shadow-lg hover:text-white hover:bg-gradient-to-t from-verde3-custom from-10% to-verde2-custom to-90%">
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
          className="m-2 rounded-sm mt-6 px-4 py-2 bg-white text-azul-custom hover:bg-verde2-custom hover:text-white transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;