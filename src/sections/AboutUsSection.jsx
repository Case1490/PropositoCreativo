const AboutUsSection = () => {
  return (
    <div className="backgroundAboutUs">
      <div className="w-[90%] m-auto">
        <div className=" w-1/2">
          <h1 className=" text-RedMain font-bold text-5xl mb-6">
            Sobre nosotros
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
            maiores sed quas pariatur fuga ullam obcaecati dolor dicta adipisci
            commodi ex, facilis vitae veniam, dolorem, aut accusamus. Iure,
            doloribus. ullam obcaecati dolor dicta adipisci commodi ex, facilis
            vitae veniam, dolorem, aut accusamus. Iure, doloribus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
            maiores sed quas pariatur fuga ullam obcaecati dolor dicta adipisci
            commodi ex, facilis vitae veniam, dolorem, aut accusamus.
          </p>
          <div className="containerButton">
            <a href="#" className="button type--C">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">CONTÁCTANOS</span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
