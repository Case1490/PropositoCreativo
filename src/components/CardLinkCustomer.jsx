import ImageTest from "../assets/links/claudia.jpg";

import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const CardLinkCustomer = () => {
  return (
    <div className="p-3 bg-white shadow-xl rounded-xl space-y-2 text-center w-[400px] flex flex-col items-center">
      <div className=" overflow-hidden w-[200px]">
        <img
          src={ImageTest}
          alt="nombre"
          className="w-full rounded-full border"
        />
      </div>

      <h1 className="text-xl font-bold"> Dra. Claudia Gonzales</h1>

      <ul className="py-3">
        <p className="mb-3">Redes sociales:</p>
        <div className="space-y-2">
          <li className="flex items-center gap-x-1">
            <FaFacebook size={25} />
            <a href="#" className="text-BlueLightMain">
              facebook.com/ClaudiaGonzales
            </a>
          </li>
          <li className="flex items-center gap-x-1">
            <AiFillInstagram size={25} />
            <a href="#" className="text-BlueLightMain">
              instagram.com/ClaudiaGonzales
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default CardLinkCustomer;
