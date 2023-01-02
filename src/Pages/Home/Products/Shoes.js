import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Components/Loader";
import ProductCart from "../../../Components/ProductCart";

const Shoes = () => {
  const { data: shoes = [], isLoading } = useQuery({
    queryKey: ["shoes"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/products/shoes`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="lg:pt-10 pt-5 pb-5" id="shoes">
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-rose-400 to-rose-800 transition-all ease-in-out duration-100 mr-auto">
        Shoes
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3 m-8">
        {shoes.map((shoe) => (
          <ProductCart key={shoe._id} product={shoe}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
