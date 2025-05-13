import Logo from "../assets/icono_logo.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="backgroundFooter">
      <div className=" w-5/6 m-auto text-center space-y-8">
        <div className="flex flex-col space-x-6 space-y-10 lg:space-y-0 lg:flex-row">
          {/* FIRST COLUMN */}
          <div className="flex-1 flex flex-col items-center text-center space-y-4">
            <div className="w-[120px]">
              <img src={Logo} alt="Logo PropósitoCreativo" className="w-full" />
            </div>
            <p>
              Agencia de Publicidad y Comunicación Integral especializada en
              desarrollar proyectos estratégicos y creativos que destacan
              valores únicos de marca.
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
            <h1 className="font-bold text-2xl mb-6">Información</h1>
            <div className="space-y-4">
              <p className="flex justify-center items-center gap-x-2">
                <FaPhoneAlt /> +51 926 347 034
              </p>
              <p className="flex justify-center items-center gap-x-2">
                <FaPhoneAlt /> +51 986 261 159
              </p>
              <p className="flex justify-center items-center gap-x-2 break-words whitespace-normal w-full">
                <MdEmail />
                agenciadepublicidad@propositocreativo.com
              </p>
              <p className="flex justify-center items-center gap-x-2">
                <FaLocationDot /> Lima, Perú
              </p>
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
