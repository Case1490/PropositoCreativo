const CardService = ({ icon: Icon, title, bgColor }) => {
  const lightBackgrounds = [
    "bg-CyanMain",
    "bg-GreenLightMain",
    "bg-YellowMain",
  ];
  const isLightBg = lightBackgrounds.includes(bgColor);
  const iconColor = isLightBg ? "text-black" : "text-white";
  const textColor = isLightBg ? "text-black" : "text-white";

  return (
    <div
      className={`${bgColor} group grid h-[240px] place-content-center hover:cursor-pointer hover:scale-110 shadow-xl hover:shadow-2xl p-4 rounded-xl space-y-3 text-white transition-all delay-75 ease-in`}
    >
      <Icon size={80} className={`mx-auto ${iconColor}`} />
      <h1 className={`text-xl font-bold uppercase ${textColor}`}>{title}</h1>
    </div>
  );
};

export default CardService;
