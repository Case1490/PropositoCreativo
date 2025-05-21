import LogoNegative from "../assets/icono_negativo_logo.png";
import { FaRocket } from "react-icons/fa";
import { MdMilitaryTech } from "react-icons/md";
import { ImHappy2 } from "react-icons/im";

const MissionAndVision = () => {
  return (
    <div className="backgroundAll flex flex-col lg:flex-row items-center justify-center gap-x-8">
      <div className="w-[300px] lg:w-[400px] order-2 lg:order-1">
        <img
          src={LogoNegative}
          alt="Propósito Creativo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 p-8 space-y-6 order-1 lg:order-2">
        <div className="shadow-xl p-2 rounded-xl border bg-white">
          <div className="flex items-center gap-x-2 bg-RedMain text-white justify-center py-1 px-2 rounded-full my-2">
            <FaRocket size={20} />
            <h1 className="text-2xl font-bold">Misión</h1>
          </div>

          <p className="text-center">
            Crear, Inspirar y fortalecer marcas con propósito creando relaciones
            genuinas que generen un impacto positivo y transformador, impulsando
            su crecimiento y consolidando su lugar en el mercado con un enfoque
            creativo, auténtico y duradero.
          </p>
        </div>

        <div className="shadow-xl p-2 rounded-xl border bg-white">
          <div className="flex items-center gap-x-2 bg-BlueLightMain text-white justify-center py-1 px-2 rounded-full my-2">
            <MdMilitaryTech size={20} />
            <h1 className="text-2xl font-bold">Visión</h1>
          </div>
          <p className="text-center">
            Transformar ideas de alto impacto en conexiones auténticas que
            generen el bienestar duradero en las marcas y en la sociedad. A
            través de estrategias innovadoras y con propósito, buscamos dejar un
            legado de creatividad efectiva y eficiente que inspire cambios
            significativos y sostenibles en la industria creativa de la
            publicidad global.
          </p>
        </div>

        <div className="shadow-xl p-2 rounded-xl border bg-white">
          <div className="flex items-center gap-x-2 bg-OrangeMain text-white justify-center py-1 px-2 rounded-full my-2">
            <ImHappy2 size={20} />
            <h1 className="text-2xl font-bold">Valores</h1>
          </div>
          <p>
            <span className="font-bold">• Honestidad:</span> Brindamos
            recomendaciones realistas priorizando siempre el beneficio del
            cliente.
          </p>
          <p>
            <span className="font-bold">• Confianza: </span>
            Construimos relaciones sólidas, estando presentes en cada etapa del
            proceso y cumpliendo nuestros compromisos con integridad y
            transparencia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
