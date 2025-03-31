import CirculeReason from "../components/CirculeReason";

const ReasonsSection = () => {
  const reasons = [
    "1. Estrategia Personalizada",
    "2. Creatividad Innovadora",
    "3. Resultados Medibles",
    "4. Equipo Experimentado",
    "5. Agilidad y Rapidez",
    "6. Reconocimiento en la Industria",
  ];

  return (
    <div className="backgroundReasons">
      <div className=" bg-PurpleMain mb-8 rounded-full w-[450px] h-[80px] flex items-center justify-center m-auto">
        <h1 className="py-8 text-center text-4xl font-bold text-white">
          ¿Por qué elegirnos?
        </h1>
      </div>

      <div className=" w-3/5 float-end grid grid-cols-3 place-items-center gap-y-6">
        {reasons.map((reason, index) => (
          <CirculeReason key={index} reason={reason} />
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
