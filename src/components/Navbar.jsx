import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[999]">
      <div className="w-5/6 m-auto flex items-center justify-between py-3">
        <div className="w-[160px]">
          <img src={Logo} alt="Propósito Creativo" className="w-full" />
        </div>

        <div>
          <ul className="flex gap-x-6 text-xl">
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Portafolio</li>
            <li>Testimonios</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
