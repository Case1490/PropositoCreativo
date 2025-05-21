import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardLinkCustomer from "../components/CardLinkCustomer";
import "swiper/css/navigation";
import "swiper/css";

// IMPORT LOGOS
import Callo from "../assets/links/callo.jpg";
import Cardenas from "../assets/links/cardenas.jpg";
import Claudia from "../assets/links/claudia.jpg";
import Delgado from "../assets/links/delgado.jpg";
import Meza from "../assets/links/meza.jpg";
import Remy from "../assets/links/remy.jpg";
import Toulier from "../assets/links/toulier.jpg";
import Ucharima from "../assets/links/ucharima.jpg";

const infoLinks = [
  {
    logo: Callo,
    name: "Dr Marco Callo",
    facebook: "https://www.facebook.com/share/1BwVPJrx8Z/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/dra.raqueldelgadotupediatra?igsh=MTd4NGh3M3pycDhjNQ==",
  },
  {
    logo: Cardenas,
    name: "Dr Fernando Cárdenas",
    facebook: "https://www.facebook.com/share/1VFjiQX3tg/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/cirujano_fernandocardenas?igsh=ZDJwN216Nm95Ymgx",
  },
  {
    logo: Claudia,
    name: "Dr Claudia Gonzales",
    facebook: "https://www.facebook.com/share/16WAcWv1k8/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/dra.claudiagonzales?igsh=MWR6MXQyZHE5Zm1qZQ==",
  },
  {
    logo: Delgado,
    name: "Raquel Delgado",
    facebook: "https://www.facebook.com/share/1BwVPJrx8Z/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/dra.raqueldelgadotupediatra?igsh=MTd4NGh3M3pycDhjNQ==",
  },
  {
    logo: Meza,
    name: "Dr Juan Carlos Meza",
    facebook: "https://www.facebook.com/share/1Fobf9Q1gy/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/drjuancarlosmeza?igsh=MXBxbDhjd2ZscnczZw==",
  },
  {
    logo: Remy,
    name: "Dr Remy Baca",
    facebook: "https://www.facebook.com/share/1BdZgMBPMd/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/c.remy_baca25?igsh=MTNqeGVodGUzZDByMg==",
  },
  {
    logo: Toulier,
    name: "Dr Víctor Toulier",
    facebook: "https://www.facebook.com/share/14Dqtnw1k16/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/dr.victortoulier?igsh=MWF1aWgxc2t5bmh0ZQ==",
  },
  {
    logo: Ucharima,
    name: "Ucharima",
    facebook: "https://www.facebook.com/share/18ySTRw249/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/ucharimaperu?igsh=YXl0YnpwZ2tuODU0",
  },
];

const LinksCustomers = () => {
  return (
    <div className="backgroundAll">
      <div className="w-5/6 m-auto text-center my-4 ">
        <h1 className="font-bold text-2xl sm:text-4xl py-1 px-2 mt-20 rounded-full bg-SkyBlue text-white inline-block">
          Links de portafolio de clientes
        </h1>

        {/* Carrusel de Swiper */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }}
        >
          {infoLinks.map((link, index) => (
            <SwiperSlide key={index}>
              <div className=" flex justify-center h-full items-center">
                <CardLinkCustomer
                  logo={link.logo}
                  name={link.name}
                  facebooklink={link.facebook}
                  instagramlink={link.instagram}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LinksCustomers;
