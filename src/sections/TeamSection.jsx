import CardTeam from "../components/CardTeam";

const TeamSection = () => {
  return (
    <div className="bg-team-section">
      <div className="w-5/6 m-auto flex flex-col h-full justify-around text-white text-center py-4">
        <h1 className="text-5xl font-bold my-8">Nuestro Equipo Creativo</h1>
        <div className="flex gap-x-8">
          <CardTeam />
          <CardTeam />
          <CardTeam />
          <CardTeam />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
