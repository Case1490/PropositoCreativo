import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="w-full fixed z-50 text-white">
      <div className="w-5/6 m-auto flex items-center justify-center">
        <div>
          {/* Clase para ocultar en pantallas menores a sm y mostrar en sm y más grandes */}
          <ul className="hidden sm:flex items-center text-xl shadow-2xl rounded-b-3xl">
            <a
              className="bg-BlueLightMain py-2 px-4 rounded-bl-3xl cursor-pointer"
              href="#inicio"
            >
              Inicio
            </a>
            <a
              className="bg-GreenLightMain text-black p-2 px-4 cursor-pointer"
              href="#nosotros"
            >
              Nosotros
            </a>
            <a
              className="bg-OrangeMain text-black p-2 px-4 cursor-pointer"
              href="#servicios"
            >
              Servicios
            </a>
            <a
              className="bg-YellowMain text-black p-2 px-4 cursor-pointer"
              href="#portafolio"
            >
              Portafolio
            </a>
            <a
              className="bg-RedMain p-2 px-4 rounded-br-3xl  cursor-pointer"
              href="#contacto"
            >
              Contacto
            </a>
          </ul>
        </div>
        {/* Menú flotante en la esquina inferior derecha */}
        {!menuVisible && (
          <div
            className="fixed bottom-4 right-4 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer sm:hidden"
            onClick={toggleMenu}
          >
            <IoMenuSharp size={30} />
          </div>
        )}
      </div>
      {/* Menú lateral desplegable */}
      {menuVisible && (
        <div className="fixed top-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 w-3/4">
          <div className="bg-gray-800 text-white h-full w-full p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Menú</h2>
              <button className="text-white" onClick={toggleMenu}>
                <IoCloseSharp size={30} />
              </button>
            </div>
            <ul className="text-xl space-y-4">
              <li className="py-2">Inicio</li>
              <li className="py-2">Servicios</li>
              <li className="py-2">Portafolio</li>
              <li className="py-2">Testimonios</li>
              <li className="py-2">Contacto</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
