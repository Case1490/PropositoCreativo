import VideoPortada from "../assets/portadaVideo.mp4";
import ButtonContact from "../components/ButtonContact";

const MainPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center pl-10">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={VideoPortada} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Contenido sobre el video */}
      <div className="relative z-10 p-8 max-w-xl">
        <h1 className="text-5xl font-bold">
          Creatividad que conecta, estrategias que impactan
        </h1>
        <p className="mt-4 text-xl">
          Impulsamos tu marca con estrategias que convierten miradas en ventas.
          Más visibilidad, más clientes, más crecimiento
        </p>
        <ButtonContact />
      </div>
    </div>
  );
};

export default MainPage;
