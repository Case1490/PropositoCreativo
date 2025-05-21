import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const CardLinkCustomer = ({ logo, name, facebooklink, instagramlink }) => {
  return (
    <div className="p-3 bg-white shadow-xl rounded-xl space-y-2 text-center w-[300px] sm:w-[350px] flex flex-col items-center">
      <div className=" overflow-hidden w-[200px]">
        <img src={logo} alt={name} className="w-full rounded-full border" />
      </div>

      <h1 className="text-xl font-bold text-RedMain">{name}</h1>

      <ul className="py-3">
        <p className="mb-3">Redes sociales:</p>
        <div className="space-y-2">
          <li className="flex items-center gap-x-1">
            <FaFacebook size={25} />
            <a
              target="_blank"
              href={facebooklink}
              className="text-BlueLightMain border-b-2 border-BlueLightMain"
            >
              {`facebook/${name}`}
            </a>
          </li>
          <li className="flex items-center gap-x-1">
            <AiFillInstagram size={25} />
            <a
              target="_blank"
              href={instagramlink}
              className="text-BlueLightMain border-b-2 border-BlueLightMain"
            >
              {`instagram/${name}`}
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default CardLinkCustomer;
