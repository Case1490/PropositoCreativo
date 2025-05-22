import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// IMPORTING WORK DONE FOR CLIENTS
import image1 from "../assets/trabajosParaClientes/IFB - certus.png";
import image2 from "../assets/trabajosParaClientes/RicardoPalma.png";
import image3 from "../assets/trabajosParaClientes/Trilce.png";
import image4 from "../assets/trabajosParaClientes/p1.png";
import image5 from "../assets/trabajosParaClientes/Cesca.png";
import image6 from "../assets/trabajosParaClientes/NacionesUnidas.png";
import image7 from "../assets/trabajosParaClientes/MININTER.png";
import image8 from "../assets/trabajosParaClientes/p2.png";
import image9 from "../assets/trabajosParaClientes/p3.png";
import image10 from "../assets/trabajosParaClientes/p4.png";
import image11 from "../assets/trabajosParaClientes/p5.png";
import image12 from "../assets/trabajosParaClientes/p6.png";
import image13 from "../assets/trabajosParaClientes/p7.png";
import image14 from "../assets/trabajosParaClientes/p8.png";
import image15 from "../assets/trabajosParaClientes/p9.png";
import image16 from "../assets/trabajosParaClientes/p10.png";
import image17 from "../assets/trabajosParaClientes/El.png";
import image18 from "../assets/trabajosParaClientes/Ucharima.png";
import image19 from "../assets/trabajosParaClientes/Ucal.png";

// IMPORTING VIDEO OF BACKGROUND
import Video from "../assets/videoParticulas.mp4";

const ports = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
];

const PortfolioSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="portafolio">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={Video} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Capa de superposición oscura opcional */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Carrusel sobre el video */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
        <h1 className=" text-white font-bold w-[90%] sm:w-5/6 text-3xl sm:text-5xl text-center my-10 capitalize">
          Portafolio Proyectos de Clientes
        </h1>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={-30}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="testimonials-swiper"
        >
          {ports.map((port, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center "
            >
              <img
                src={port}
                className=" w-[250px] h-[300px] sm:w-[300px] sm:h-[400px] rounded-xl shadow-xl"
                alt={`Portafolio ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioSection;
