import React from "react";
import CardTeam from "../components/CardTeam";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Renzito",
    position: "programador",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Kroos",
    position: "programador",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Cristiano Ronaldo",
    position: "programador",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Messi",
    position: "programador",
    phrase: "lorem10adasjdjasdjasjdasjdajdj",
  },
  {
    name: "Neymar",
    position: "programador",
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
