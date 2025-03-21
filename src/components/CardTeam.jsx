import Prueba from "../assets/prueba.png";

const CardTeam = () => {
  return (
    <div className="card-team">
      <div className="w-[200px]">
        <img src={Prueba} alt="User1" className="w-full" />
      </div>

      <div className="p-4">
        <h1 className="font-bold text-OrangeMain">Nombre apellido</h1>
        <p className="font-bold text-GreenLightMain">cargo en la agencia</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
          perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default CardTeam;
