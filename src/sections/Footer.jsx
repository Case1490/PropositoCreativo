import Logo from "../assets/icono_logo.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="backgroundFooter">
      <div className=" w-5/6 m-auto text-center space-y-8">
        <div className="flex flex-col lg:space-x-6 space-y-10 lg:space-y-0 lg:flex-row">
          {/* FIRST COLUMN */}
          <div className="flex-1 text-center space-y-4">
            <div className="w-[250px] m-auto">
              <img src={Logo} alt="Logo PropósitoCreativo" className="w-full" />
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className="flex-1 text-center">
            <h1 className=" font-bold text-2xl mb-6">Navegación</h1>
            <ul className=" space-y-4 flex flex-col">
              <a className="cursor-pointer hover:text-RedMain" href="#inicio">
                Inicio
              </a>
              <a className="cursor-pointer hover:text-RedMain" href="#nosotros">
                Nosotros
              </a>
              <a
                className="cursor-pointer hover:text-RedMain"
                href="#servicios"
              >
                Servicios
              </a>
              <a
                className="cursor-pointer hover:text-RedMain"
                href="#portafolio"
              >
                Portafolio
              </a>
              <a className="cursor-pointer hover:text-RedMain" href="#contacto">
                Contacto
              </a>
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
                info@agenciadepublicidadpropositocreativo.com
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
              <p>Lunes - Viernes: 9am - 6pm</p>
              <p>Sábados: 9am - 2pm</p>
            </div>
          </div>
        </div>

        <h1 className="py-10 font-bold">
          Copyright &copy; 2025 Todos los derechos reservados |
          PropósitoCreativo
        </h1>

        <div className="flex items-center justify-center space-x-6 text-4xl">
          <a
            href="https://www.facebook.com/profile.php?id=61573812403617"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/propositocreativo2025/"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
