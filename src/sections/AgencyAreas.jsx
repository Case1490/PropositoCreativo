import CardAgencyAreas from "../components/CardAgencyAreas";

// IMAGES OF AGENCY AREAS
import Marketing from "../assets/areas/marketing.jpg";
import Design from "../assets/areas/diseño.jpg";
import Audiovisual from "../assets/areas/audiovisual.jpg";
import Web from "../assets/areas/web.jpg";

const AgencyAreas = () => {
  return (
    <div className="w-5/6 m-auto my-8">
      <h1 className="text-4xl font-bold my-4 text-center">
        Áreas de la agencia
      </h1>
      <p className="text-center">
        En nuestra agencia, cada área se especializa en potenciar marcas desde
        lo estratégico, lo visual y lo digital, trabajando en conjunto para
        lograr resultados efectivos y memorables.
      </p>

      <div className="flex items-center justify-center gap-x-4 mt-10">
        <CardAgencyAreas
          image={Marketing}
          title="Marketing"
          paragraph="Diseñamos estrategias de marketing basadas en un análisis detallado del mercado y el consumidor, generando campañas que maximizan el retorno sobre la inversión y aseguran resultados medibles.
"
        />
        <CardAgencyAreas
          image={Design}
          title="Diseño"
          paragraph="Creamos identidades visuales coherentes y distintivas que comunican los valores de la marca y generan una presencia memorable en la mente del consumidor.
"
        />
        <CardAgencyAreas
          image={Audiovisual}
          title="Audiovisual"
          paragraph="Desarrollamos contenido visual impactante que transmite los mensajes clave de la marca, potenciando su visibilidad y estableciendo una conexión emocional duradera con el público.
"
        />
        <CardAgencyAreas
          image={Web}
          title="Desarrollo Web"
          paragraph="Diseñamos sitios web funcionales y atractivos, optimizando la experiencia del usuario y facilitando la conversión de visitantes en clientes, mejorando la presencia online de la marca."
        />
      </div>
    </div>
  );
};

export default AgencyAreas;
