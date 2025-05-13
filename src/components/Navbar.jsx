import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed z-50 text-white">
      <div className="w-5/6 m-auto flex items-center justify-center">
        <div>
          {/* Clase para ocultar en pantallas menores a sm y mostrar en sm y más grandes */}
          <ul className="hidden sm:flex items-center text-xl shadow-2xl rounded-b-3xl">
            <li className="bg-BlueLightMain py-2 px-4 rounded-bl-3xl">
              Inicio
            </li>
            <li className="bg-GreenLightMain text-black p-2 px-4">Servicios</li>
            <li className="bg-OrangeMain text-black p-2 px-4">Portafolio</li>
            <li className="bg-YellowMain text-black p-2 px-4">Testimonios</li>
            <li className="bg-RedMain p-2 px-4 rounded-br-3xl">Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
