const CirculeReason = ({ reason }) => {
  return (
    <div className="bg-YellowMain rounded-full text-PurpleMain text-wrap p-4 w-[180px] h-[180px] flex items-center justify-center text-center">
      <h1 className="text-xl font-bold">{reason}</h1>
    </div>
  );
};

export default CirculeReason;
