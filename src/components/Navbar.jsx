import { useEffect, useState } from "react";

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
      <div className="w-5/6 m-auto flex items-center justify-center">
        <div>
          <ul className="flex items-center text-xl">
            <li className=" bg-BlueLightMain py-2 px-4 rounded-bl-3xl">
              Inicio
            </li>
            <li className=" bg-PurpleMain p-2 px-4">Servicios</li>
            <li className=" bg-GreenLightMain text-black p-2 px-4">
              Portafolio
            </li>
            <li className=" bg-OrangeMain p-2 px-4">Testimonios</li>
            <li className=" bg-YellowMain text-black p-2 px-4 rounded-br-3xl">
              Contacto
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
