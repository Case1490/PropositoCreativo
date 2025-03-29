const CardService = ({ icon: Icon, title, paragraph, bgColor }) => {
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
      className={`${bgColor} group hover:cursor-pointer shadow-xl p-4 rounded-xl space-y-3 text-white`}
    >
      <Icon size={50} className={`mx-auto ${iconColor}`} />
      <h1 className={`text-xl font-bold uppercase ${textColor}`}>{title}</h1>
      <p className={textColor}>{paragraph}</p>
    </div>
  );
};

export default CardService;
