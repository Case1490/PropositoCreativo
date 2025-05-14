const CardAgencyAreas = ({ image, title, paragraph }) => {
  return (
    <div className="shadow-xl w-[400px] rounded-xl overflow-hidden flex flex-col h-[450px] cardHover">
      <div className="h-[220px] w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center space-y-3 p-3">
        <h1 className="text-xl font-bold uppercase">{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default CardAgencyAreas;
