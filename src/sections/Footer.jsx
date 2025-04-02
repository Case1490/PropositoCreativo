import Logo from "../assets/icono_logo.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="backgroundFooter">
      <div className=" w-5/6 m-auto text-center space-y-8">
        <div className="flex">
          {/* FIRST COLUMN */}
          <div className="flex-1 flex flex-col items-center text-center space-y-4">
            <div className="w-[120px]">
              <img src={Logo} alt="Logo PropósitoCreativo" className="w-full" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              sequi eveniet accusantium sunt recusandae
            </p>
          </div>

          {/* SECOND COLUMN */}
          <div className="flex-1 text-center">
            <h1 className=" font-bold text-2xl mb-6">Navegación</h1>
            <ul className=" space-y-4">
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Portafolio</li>
              <li>Testimonios</li>
              <li>Contacto</li>
            </ul>
          </div>

          {/* THIRD COLUMN */}
          <div className="flex-1 text-center">
            <h1 className=" font-bold text-2xl mb-6">Información</h1>
            <div className=" space-y-4">
              <p>+412412412</p>
              <p>readasd@gmail.com</p>
              <p>Chosica, Perú</p>
            </div>
          </div>

          {/* FOURTH COLUMN */}
          <div className="flex-1 text-center">
            <h1 className=" font-bold text-2xl mb-6">Horario de atención</h1>
            <div className=" space-y-6">
              <p>Lunes - Viernes: 9am - 10pm</p>
              <p>Sábados: 10am - 5pm</p>
            </div>
          </div>
        </div>

        <h1 className="py-10 font-bold">
          Copyright &copy; 2025 Todos los derechos reservados |
          PropósitoCreativo
        </h1>

        <div className="flex items-center justify-center space-x-6 text-4xl">
          <FaFacebookSquare />
          <FaTiktok />
          <FaInstagramSquare />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
