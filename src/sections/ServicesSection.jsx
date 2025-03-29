// IMPORTANDO ICONOS
import { SiCampaignmonitor } from "react-icons/si"; //Campaña de publicidad de lanzamiento de un producto
import { MdCampaign } from "react-icons/md"; //Campaña de publicidad de extensión de línea
import { TbBrandSuperhuman } from "react-icons/tb"; //Creación de Marca Personal
import { MdOutlinePublic } from "react-icons/md"; //Publicidad en medios de comunicación
import { TbSocial } from "react-icons/tb"; //Redes sociales
import { LuMonitorCheck } from "react-icons/lu"; //Diseño de página web
import { MdAttachEmail } from "react-icons/md"; //email marketing
import { MdBrandingWatermark } from "react-icons/md"; //Branding e Identidad Corporativa
import { LuPackage } from "react-icons/lu"; // Packaging
import { MdDesignServices } from "react-icons/md"; //Diseño de Logotipo
import { PiVideoFill } from "react-icons/pi"; //Publicidad audiovisual y marketing en vídeo
import { IoFlagSharp } from "react-icons/io5"; //Publicidad exterior: Anuncios en carteles, vallas publicitarias
import { IoPrint } from "react-icons/io5"; //Publicidad impresa
import { SiGooglemarketingplatform } from "react-icons/si"; //Neuromarketing
import { MdMilitaryTech } from "react-icons/md"; //Técnicas de ventas
import CardService from "../components/CardService";

const service = [
  {
    icon: SiCampaignmonitor,
    title: "Campaña de publicidad de lanzamiento de un producto",
    paragraph:
      "Lanzamos tu producto al mercado con impacto, creatividad e innovación para atraer nuevos clientes.",
  },
  {
    icon: MdCampaign,
    title: "Campaña de publicidad de extensión de línea",
    paragraph:
      "Ampliamos tu marca con campañas estratégicas que impulsan nuevos productos y refuerzan tu posicionamiento.",
  },
  {
    icon: TbBrandSuperhuman,
    title: "Creación de Marca Personal",
    paragraph:
      "Impulsa tu imagen profesional con estrategias visuales y comunicativas que reflejan tu esencia auténtica.",
  },
  {
    icon: MdOutlinePublic,
    title: "Publicidad en medios de comunicación",
    paragraph:
      "Promocionamos tu negocio en radio, prensa y televisión para alcanzar una audiencia masiva eficazmente.",
  },
  {
    icon: TbSocial,
    title: "Redes sociales",
    paragraph:
      "Diseñamos contenido atractivo que conecta con tu comunidad y potencia tu presencia digital diariamente.",
  },
  {
    icon: LuMonitorCheck,
    title: "Diseño de página web",
    paragraph:
      "Creamos sitios web funcionales, atractivos y optimizados para brindar una experiencia única al usuario.",
  },
  {
    icon: MdAttachEmail,
    title: "Email Marketing",
    paragraph:
      "Aumenta tus ventas con campañas por correo efectivas, personalizadas y enfocadas en fidelizar clientes.",
  },
  {
    icon: MdBrandingWatermark,
    title: "Branding e Identidad Corporativa",
    paragraph:
      "Desarrollamos una identidad visual sólida que transmite los valores y personalidad de tu empresa.",
  },
  {
    icon: LuPackage,
    title: "Packaging",
    paragraph:
      "Diseñamos empaques atractivos y funcionales que mejoran la percepción y experiencia del producto final.",
  },
  {
    icon: MdDesignServices,
    title: "Diseño de Logotipo",
    paragraph:
      "Creamos logotipos memorables, modernos y versátiles que representan tu marca de forma profesional.",
  },
  {
    icon: PiVideoFill,
    title: "Publicidad audiovisual y marketing en vídeo",
    paragraph:
      "Generamos videos impactantes para conectar emocionalmente con tu audiencia y aumentar tu visibilidad online.",
  },
  {
    icon: IoFlagSharp,
    title: "Publicidad exterior",
    paragraph:
      "Llevamos tu mensaje al público mediante carteles, vallas y mupis ubicados estratégicamente en ciudades.",
  },
  {
    icon: IoPrint,
    title: "Publicidad impresa",
    paragraph:
      "Diseñamos folletos, volantes y catálogos atractivos para comunicar eficazmente tus servicios o productos.",
  },
  {
    icon: SiGooglemarketingplatform,
    title: "Neuromarketing",
    paragraph:
      "Aplicamos técnicas científicas para comprender el comportamiento del consumidor y optimizar tus estrategias publicitarias.",
  },
  {
    icon: MdMilitaryTech,
    title: "Técnicas de ventas",
    paragraph:
      "Capacitamos en estrategias efectivas para cerrar ventas y mejorar la relación con tus clientes.",
  },
];

const bgColors = [
  "bg-RedMain",
  "bg-OrangeMain",
  "bg-BlueLightMain",
  "bg-BlackMain",
  "bg-PurpleMain",
  "bg-GreenLightMain",
  "bg-YellowMain",
];

const ServicesSection = () => {
  return (
    <div className="backgroundPoints">
      <div className="w-5/6 m-auto text-center py-8">
        <h1 className="text-5xl font-bold mb-8">Nuestros Servicios</h1>
        <div className=" grid grid-cols-4 gap-4">
          {service.map((serv, index) => (
            <CardService
              key={index}
              icon={serv.icon}
              title={serv.title}
              paragraph={serv.paragraph}
              bgColor={bgColors[index % bgColors.length]} // ciclo de colores
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
