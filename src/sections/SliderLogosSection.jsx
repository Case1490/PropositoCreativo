// IMPORTANDO LOGOS DE MARCAS
import Certus from "../assets/logos/certus.jpg";
import Cardenas from "../assets/logos/cardenas.jpg";
import Claudia from "../assets/logos/claudia.jpg";
import Meza from "../assets/logos/meza.jpg";
import Remy from "../assets/logos/remy.jpg";
import Cesca from "../assets/logos/cesca.jpg";
import DentalLaRosa from "../assets/logos/dentallarosa.jpg";
import Dermomedik from "../assets/logos/dermomedik.jpg";
import Dlarus from "../assets/logos/dlaruss.jpg";
import El from "../assets/logos/el.jpg";
import Kausachum from "../assets/logos/Kausachum.png";
import MilnerGranados from "../assets/logos/milnerGranados.png";
import Mininter from "../assets/logos/mininter.jpg";
import NacionesUnidas from "../assets/logos/nacionesunidas.jpg";
import PediaLab from "../assets/logos/pedialab.jpg";
import PediaSalud from "../assets/logos/Pediasalud.jpg";
import RaquelDelgado from "../assets/logos/raqueldelgado.png";
import RicardoPalma from "../assets/logos/ricardopalma.jpg";
import Trilce from "../assets/logos/trilce.jpg";
import Ucal from "../assets/logos/ucal.jpg";
import Ucharima from "../assets/logos/ucharima.jpg";
import VictorToulier from "../assets/logos/victorToulier.jpg";

const SliderLogosSection = () => {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-center text-4xl font-bold mb-10 uppercase">
          Clientes
        </h1>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={Certus} alt="Certus" />
            </div>
            <div className="slide">
              <img src={Cardenas} alt="Dr Fernando Cardenas" />
            </div>
            <div className="slide">
              <img src={Claudia} alt="Dra Claudia Gonzales" />
            </div>
            <div className="slide">
              <img src={Meza} alt="Dr Juan Carlos Meza" />
            </div>
            <div className="slide">
              <img src={Remy} alt="Dr Remy Baca" />
            </div>
            <div className="slide">
              <img src={Cesca} alt="Cesca" />
            </div>
            <div className="slide">
              <img src={DentalLaRosa} alt="DentalLaRosa" />
            </div>
            <div className="slide">
              <img src={Dermomedik} alt="Dermomedik" />
            </div>
            <div className="slide">
              <img src={Dlarus} alt="Dlarus" />
            </div>
            <div className="slide">
              <img src={El} alt="El" />
            </div>
            <div className="slide">
              <img src={Kausachum} alt="Kausachum" />
            </div>
            <div className="slide">
              <img src={MilnerGranados} alt="MilnerGranados" />
            </div>
            <div className="slide">
              <img src={Mininter} alt="Mininter" />
            </div>
            <div className="slide">
              <img src={NacionesUnidas} alt="NacionesUnidas" />
            </div>
            <div className="slide">
              <img src={PediaLab} alt="PediaLab" />
            </div>
            <div className="slide">
              <img src={PediaSalud} alt="PediaSalud" />
            </div>
            <div className="slide">
              <img src={RaquelDelgado} alt="RaquelDelgado" />
            </div>
            <div className="slide">
              <img src={RicardoPalma} alt="RicardoPalma" />
            </div>
            <div className="slide">
              <img src={Trilce} alt="Trilce" />
            </div>
            <div className="slide">
              <img src={Ucal} alt="Ucal" />
            </div>
            <div className="slide">
              <img src={Ucharima} alt="Ucharima" />
            </div>
            <div className="slide">
              <img src={VictorToulier} alt="VictorToulier" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderLogosSection;
