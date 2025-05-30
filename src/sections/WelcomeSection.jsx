import VideoPortada from "../assets/portada.mp4";
import ButtonContact from "../components/ButtonContact";

const WelcomeSection = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center sm:pl-10 text-white bg-SkyBlue"
      id="inicio"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-contain"
      >
        <source src={VideoPortada} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Contenido sobre el video */}
      <div className="relative z-10 sm:p-8 max-w-xl h-[80%] sm:h-auto m-auto sm:m-0 flex flex-col items-center justify-between sm:items-start">
        <h1 className=" text-5xl font-bold text-center sm:text-left leading-tight sm:leading-snug">
          ¡Ideas de alto impacto!
        </h1>
        <ButtonContact />
      </div>
    </div>
  );
};

export default WelcomeSection;
