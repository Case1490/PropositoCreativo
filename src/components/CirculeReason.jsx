import Check from "../assets/check.png";

const colorClasses = [
  "bg-YellowMain text-BlackMain", // Estrategia Personalizada
  "bg-OrangeMain text-BlackMain", // Creatividad Innovadora
  "bg-BlueLightMain text-white", // Resultados Medibles
  "bg-OrangeSecond text-BlackMain", // Equipo Experimentado
  "bg-SkyBlue text-white", // Agilidad y Rapidez
  "bg-GreenLightMain text-BlackMain", // Reconocimiento en la Industria
];

const CirculeReason = ({ reason, index }) => {
  return (
    <div
      className={`rounded-full relative p-4 w-[180px] h-[180px] flex items-center justify-center text-center font-bold text-xl ${colorClasses[index]}`}
    >
      <div className=" absolute top-0 left-[-10px] w-[60px]">
        <img src={Check} alt="Check" className="w-full" />
      </div>
      {reason}
    </div>
  );
};

export default CirculeReason;
