// IMPORTANDO ICONOS
import { MdCampaign } from "react-icons/md"; //Campaña de publicidad de extensión de línea
import { TbBrandSuperhuman } from "react-icons/tb"; //Creación de Marca Personal
import { MdOutlinePublic } from "react-icons/md"; //Publicidad en medios de comunicación
import { TbSocial } from "react-icons/tb"; //Redes sociales
import { LuMonitorCheck } from "react-icons/lu"; //Diseño de página web
import { MdAttachEmail } from "react-icons/md"; //email marketing
import { MdBrandingWatermark } from "react-icons/md"; //Branding e Identidad Corporativa
import { LuPackage } from "react-icons/lu"; // Packaging
import { MdDesignServices } from "react-icons/md"; //Diseño de Logotipo
import { PiVideoFill } from "react-icons/pi"; //Publicidad audiovisual y marketing en vídeo
import { IoFlagSharp } from "react-icons/io5"; //Publicidad exterior: Anuncios en carteles, vallas publicitarias
import { IoPrint } from "react-icons/io5"; //Publicidad impresa
import { SiGooglemarketingplatform } from "react-icons/si"; //Neuromarketing
import { MdMilitaryTech } from "react-icons/md"; //Técnicas de ventas
import { SiApachesolr } from "react-icons/si"; //Logotipos sensoriales
import { MdAnimation } from "react-icons/md"; //Animación 2D
import CardService from "../components/CardService";

const service = [
  {
    icon: MdCampaign,
    title: "Campaña de Publicidad de Lanzamiento y Extensión de Línea",
  },
  {
    icon: TbBrandSuperhuman,
    title: "Creación de Marca Personal y Corporativa",
  },
  {
    icon: MdOutlinePublic,
    title: "Publicidad en Medios de Comunicación",
  },
  {
    icon: MdBrandingWatermark,
    title: "Gestión de Contenido en Redes Sociales",
  },
  {
    icon: LuMonitorCheck,
    title: "Diseño y desarrollo de página web",
  },
  {
    icon: MdAttachEmail,
    title: "Email Marketing",
  },
  {
    icon: TbSocial,
    title: "Branding e Identidad Corporativa",
  },
  {
    icon: LuPackage,
    title: "Packaging",
  },
  {
    icon: MdDesignServices,
    title: "Diseño de Logotipo",
  },
  {
    icon: PiVideoFill,
    title: "Publicidad Audiovisual",
  },
  {
    icon: IoFlagSharp,
    title: "Publicidad exterior",
  },
  {
    icon: IoPrint,
    title: "Publicidad impresa",
  },
  {
    icon: SiGooglemarketingplatform,
    title: "Neuromarketing",
  },
  {
    icon: MdMilitaryTech,
    title: "Técnicas de ventas",
  },
  {
    icon: SiApachesolr,
    title: "Logotipos Sensoriales",
  },
  {
    icon: MdAnimation,
    title: "Animación 2D",
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
    <div>
      <div className="w-5/6 m-auto text-center py-8">
        <h1 className="text-5xl font-bold mb-8">Nuestros Servicios</h1>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all delay-75">
          {service.map((serv, index) => (
            <CardService
              key={index}
              icon={serv.icon}
              title={serv.title}
              bgColor={bgColors[index % bgColors.length]} // ciclo de colores
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
