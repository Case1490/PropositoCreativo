import CardLinkCustomer from "../components/CardLinkCustomer";

const LinksCustomers = () => {
  return (
    <div className="backgroundAll">
      <div className="w-5/6 m-auto text-center">
        <h1 className=" font-bold text-4xl py-1 px-2 rounded-full mb-10 bg-SkyBlue text-white inline-block">
          Resultados que hablan por sí solos
        </h1>

        <div className="flex items-center justify-center gap-x-6">
          <CardLinkCustomer />
          <CardLinkCustomer />
          <CardLinkCustomer />
          <CardLinkCustomer />
        </div>
      </div>
    </div>
  );
};

export default LinksCustomers;
