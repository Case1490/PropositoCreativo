import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed z-[999] text-white transition duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/30" : ""
      }`}
    >
      <div className="w-5/6 m-auto flex items-center justify-between py-2">
        <div className="w-[80px]">
          <img src={Logo} alt="Propósito Creativo" className="w-full" />
        </div>

        <div>
          <ul className="flex items-center gap-x-12 text-xl">
            <li className=" bg-BlueLightMain p-2 rounded-lg">Inicio</li>
            <li className=" bg-PurpleMain p-2 rounded-lg">Servicios</li>
            <li className=" bg-GreenLightMain text-black p-2 rounded-lg">
              Portafolio
            </li>
            <li className=" bg-OrangeMain p-2 rounded-lg">Testimonios</li>
            <li className=" bg-YellowMain text-black p-2 rounded-lg">
              Contacto
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
