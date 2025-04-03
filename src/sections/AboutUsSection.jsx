import ShadowImage from "../assets/aura.png";
import LogoNegative from "../assets/icono_negativo_logo.png";

const AboutUsSection = () => {
  return (
    <div className="backgroundAboutUs">
      <div className="w-[90%] py-10 md:py-0 m-auto flex flex-col items-center justify-center md:flex-row">
        <div className=" w-[90%] md:w-1/2">
          <h1 className=" text-RedMain font-bold text-5xl mb-6 text-center md:text-left">
            Nosotros
          </h1>
          <p className=" text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
            maiores sed quas pariatur fuga ullam obcaecati dolor dicta adipisci
            commodi ex, facilis vitae veniam, dolorem, aut accusamus. Iure,
            doloribus. ullam obcaecati dolor dicta adipisci commodi ex, facilis
            vitae veniam, dolorem, aut accusamus. Iure, doloribus.
          </p>

          <p className=" text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
            maiores sed quas pariatur fuga ullam obcaecati dolor dicta adipisci
            commodi ex, facilis vitae veniam, dolorem, aut accusamus.
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
