import CirculeReason from "../components/CirculeReason";

const ReasonsSection = () => {
  const reasons = [
    "Estrategia Personalizada",
    "Creatividad Innovadora",
    "Resultados Medibles",
    "Equipo Experimentado",
    "Agilidad y Rapidez",
    "Reconocimiento en la Industria",
  ];

  return (
    <div className="backgroundReasons">
      <div className="bg-PurpleMain mb-8 rounded-full w-[450px] h-[80px] flex items-center justify-center m-auto">
        <h1 className="py-8 text-center text-4xl font-bold text-white">
          ¿Por qué elegirnos?
        </h1>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-y-6">
        {reasons.map((reason, index) => (
          <CirculeReason key={index} reason={reason} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
