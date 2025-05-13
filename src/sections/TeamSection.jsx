import React from "react";
import CardTeam from "../components/CardTeam";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Pedro Gonzáles",
    position: "Gerente",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Raquel Aldeguer",
    position: "Gerente",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Nicole Gonzáles",
    position: "Diseñadora",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Jordan Santiago",
    position: "Diseñador 2D",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Maricielo",
    position: "Community Manager",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Renzo Ramos",
    position: "Programador web",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Francesca",
    position: "Diseñadora",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Shirley",
    position: "Community Manager",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Sofía",
    position: "Community Manager",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Muestra 3 tarjetas por defecto
    slidesToScroll: 3, // Desplaza 3 tarjetas por vez
    responsive: [
      {
        breakpoint: 1024, // Cambios a partir de tamaño de pantalla de 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // Cambios a partir de tamaño de pantalla de 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-team-section">
      <div className="w-5/6 m-auto flex flex-col h-full justify-around text-white text-center py-4">
        <h1 className="text-5xl font-bold my-8">Nuestro Equipo Creativo</h1>
        <Slider {...settings}>
          {data.map((dat, index) => (
            <CardTeam
              key={index}
              name={dat.name}
              position={dat.position}
              phrase={dat.phrase}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;
