import Prueba from "../assets/prueba.png";

const CardTeam = ({ name, position, phrase }) => {
  return (
    <div className="card-team">
      <div className="w-[200px]">
        <img src={Prueba} alt={name} className="w-full" />
      </div>

      <div className="p-4">
        <h1 className="font-bold text-OrangeMain">{name}</h1>
        <p className="font-bold text-GreenLightMain">{position}</p>
        <p>{phrase}</p>
      </div>
    </div>
  );
};

export default CardTeam;
