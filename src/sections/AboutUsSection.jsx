import ShadowImage from "../assets/aura.png";
import LogoNegative from "../assets/icono_negativo_logo.png";

const AboutUsSection = () => {
  return (
    <div className="backgroundAboutUs" id="nosotros">
      <div className="w-[90%] py-10 md:py-0 m-auto flex flex-col items-center justify-center md:flex-row">
        <div className=" w-[90%] md:w-1/2">
          <h1 className=" text-RedMain font-bold text-5xl mb-6 text-center md:text-left">
            Nosotros
          </h1>
          <p className=" text-center md:text-left">
            Propósito Creativo es una Agencia de Publicidad y Comunicación
            Integral, conformada por un equipo humano y experimentado en
            desarollar proyectos de comunicación eficaces y eficientes por su
            enfoque estratégico y creativo de los valores diferenciales de la
            marca de nuestros clientes que se posicionan en sus consumidores
            como beneficios únicos que activan una acción de compra y un vínculo
            emocional que se fortalece con nuestras estrategias de innovación.
          </p>
          <div className="containerButton m-auto md:m-0">
            <a href="#" className="button type--C m-auto md:m-0">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">CONTÁCTANOS</span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>
          </div>
        </div>

        <div className=" w-[250px] md:w-[350px]">
          <img src={LogoNegative} alt="xd" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
