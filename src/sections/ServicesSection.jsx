import { useState } from "react";
import Modal from "react-modal";

// IMPORTANDO ICONOS
import { MdCampaign } from "react-icons/md"; //Campaña de publicidad de extensión de línea
import { TbBrandSuperhuman } from "react-icons/tb"; //Creación de Marca Personal
import { MdOutlinePublic } from "react-icons/md"; //Publicidad en medios de comunicación
import { TbSocial } from "react-icons/tb"; //Redes sociales
import { LuMonitorCheck } from "react-icons/lu"; //Diseño de página web
import { MdAttachEmail } from "react-icons/md"; //email marketing
import { MdBrandingWatermark } from "react-icons/md"; //Branding e Identidad Corporativa
import { LuPackage } from "react-icons/lu"; // Packaging
import { IoIosFingerPrint } from "react-icons/io"; //Diseño de Logotipo
import { PiVideoFill } from "react-icons/pi"; //Publicidad audiovisual y marketing en vídeo
import { IoFlagSharp } from "react-icons/io5"; //Publicidad exterior: Anuncios en carteles, vallas publicitarias
import { MdLibraryBooks } from "react-icons/md"; //Publicidad impresa
import { FaBrain } from "react-icons/fa"; //Neuromarketing
import { FaHandshake } from "react-icons/fa"; //Técnicas de ventas
import { FaEye } from "react-icons/fa"; //Logotipos sensoriales
import { MdAnimation } from "react-icons/md"; //Animación 2D
import CardService from "../components/CardService";

const service = [
  {
    icon: MdCampaign,
    title: "Campañas publicitarias de Lanzamiento y Extensión de Línea",
    description:
      "Estrategias orientadas a introducir nuevos productos bajo una línea existente, aprovechando el reconocimiento previo de la marca y conectando de manera efectiva con el público objetivo desde sus intereses y necesidades.",
  },
  {
    icon: TbBrandSuperhuman,
    title: "Creación de Marca Personal y Corporativa",
    description:
      "Desarrollo de una identidad única y auténtica para emprendedores, profesionales y empresas, generando confianza y diferenciación en el mercado, a través de una presencia sólida y coherente de los valores diferenciales.",
  },
  {
    icon: MdOutlinePublic,
    title: "Publicidad en Medios de Comunicación",
    description:
      "Gestión de campañas en medios tradicionales como televisión, radio y prensa, alcanzando un amplio público mediante una segmentación precisa que asegura la efectividad del mensaje.",
  },
  {
    icon: MdBrandingWatermark,
    title: "Gestión de Contenido en Redes Sociales",
    description:
      "Creación y distribución de contenido relevante en plataformas sociales para fomentar el engagement, incrementar la interacción y fortalecer la visibilidad de la marca.",
  },
  {
    icon: LuMonitorCheck,
    title: "Desarrollo de páginas web",
    description:
      "Creación de sitios web visuales y funcionales, optimizados para una experiencia de usuario intuitiva, que convierten visitas en clientes y mejoran la presencia digital de la marca.",
  },
  {
    icon: MdAttachEmail,
    title: "Email Marketing",
    description:
      "Estrategias de email marketing segmentadas, automatizadas y personalizadas, enfocadas en generar conversiones y fidelizar clientes mediante una comunicación constante y directa.",
  },
  {
    icon: TbSocial,
    title: "Branding e Identidad Corporativa",
    description:
      "Construcción de una imagen de marca coherente, que refuerza la identidad de la empresa en todos los puntos de contacto con el consumidor, garantizando un posicionamiento claro y consistente.",
  },
  {
    icon: LuPackage,
    title: "Packaging",
    description:
      "Diseño de empaques atractivos que refuerzan la identidad de la marca, para maximizar la visibilidad en el punto de venta y mejoran la experiencia del consumidor.",
  },
  {
    icon: IoIosFingerPrint,
    title: "Diseño de Logotipo",
    description:
      "Creación de logotipos memorables y representativos que reflejan los valores y la personalidad de la marca, facilitando su reconocimiento y posicionamiento en el mercado.",
  },
  {
    icon: PiVideoFill,
    title: "Publicidad Audiovisual",
    description:
      "Producción de contenido audiovisual que transmite de forma clara y emocional los mensajes de la marca, fortaleciendo la conexión con el público y mejorando la visibilidad en plataformas digitales.",
  },
  {
    icon: IoFlagSharp,
    title: "Publicidad exterior",
    description:
      "Desarrollo de anuncios visuales en espacios públicos de alto tráfico, para aumentar la exposición de la marca y captar la atención de un amplio segmento de la audiencia.",
  },
  {
    icon: MdLibraryBooks,
    title: "Publicidad impresa",
    description:
      "Diseño de piezas gráficas atractivas y directas, como volantes y catálogos que comunican eficazmente el mensaje de la marca y motivan la acción de los consumidores.",
  },
  {
    icon: FaBrain,
    title: "Neuromarketing",
    description:
      "Aplicación de técnicas de neurociencia para comprender el comportamiento del consumidor, diseñando campañas que influyen en las decisiones de compra al activar respuestas emocionales.",
  },
  {
    icon: FaHandshake,
    title: "Técnicas de ventas",
    description:
      "Estrategias persuasivas para optimizar el proceso de ventas, mejorando la conversión de prospectos en clientes mediante tácticas de negociación efectivas y enfoques basados en la confianza.",
  },
  {
    icon: FaEye,
    title: "Logotipos Sensoriales",
    description:
      "Diseño de logotipos que utilizan estímulos visuales, auditivos y táctiles para crear una conexión más profunda con el consumidor generando una experiencia multisensorial.",
  },
  {
    icon: MdAnimation,
    title: "Animación 2D",
    description:
      "Creación de animaciones 2D visualmente atractivas, diseñadas para capturar la atención del espectador mientras explican productos o servicios de manera clara y entretenida. Estas animaciones están optimizadas para mejorar la comprensión y retención del mensaje de la marca.",
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Función para abrir el modal con un servicio específico
  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedService(null);
    setModalIsOpen(false);
  };

  const lightBackgrounds = [
    "bg-CyanMain",
    "bg-GreenLightMain",
    "bg-YellowMain",
  ];
  const currentBgColor = selectedService
    ? bgColors[service.indexOf(selectedService) % bgColors.length]
    : "";
  const isLightBg = lightBackgrounds.includes(currentBgColor);
  const iconColor = isLightBg ? "text-black" : "text-white";
  const textColor = isLightBg ? "text-black" : "text-white";

  return (
    <div id="servicios">
      <div className="w-5/6 m-auto text-center py-8">
        <h1 className="text-5xl font-bold mb-8">Nuestros Servicios</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all delay-75">
          {service.map((serv, index) => (
            <div key={index} onClick={() => openModal(serv)}>
              <CardService
                icon={serv.icon}
                title={serv.title}
                bgColor={bgColors[index % bgColors.length]}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={`${currentBgColor} max-w-sm sm:max-w-lg mx-auto mt-20 p-6 rounded-xl shadow-2xl relative`}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
      >
        {selectedService && (
          <div className="text-center space-y-4">
            <selectedService.icon
              size={80}
              className={`mx-auto ${iconColor}`}
            />
            <h1 className={`text-2xl font-bold ${textColor}`}>
              {selectedService.title}
            </h1>
            <p className={`${textColor}`}>{selectedService.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-RedMain text-white rounded-lg hover:bg-red-600 transition"
            >
              Cerrar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ServicesSection;
