import CirculeReason from "../components/CirculeReason";

const ReasonsSection = () => {
  const reasons = [
    "Empatizamos con la visión del cliente",
    "Experiencia y resultados demostrables",
    "Estrategias a medida",
    "Eficiencia y puntualidad",
    "Dominio de las últimas tendencias",
    "Enfoque creativo",
    "Transparencia y comunicación",
    "Optimización continua",
  ];

  return (
    <div className="backgroundReasons">
      <div className="bg-PurpleMain mb-8 rounded-full w-[280px] h-[60px] sm:w-[450px] sm:h-[80px] flex items-center justify-center m-auto">
        <h1 className="py-8 text-center text-2xl sm:text-4xl font-bold text-white">
          ¿Por qué elegirnos?
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-6">
        {reasons.map((reason, index) => (
          <CirculeReason key={index} reason={reason} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
