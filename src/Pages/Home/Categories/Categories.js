import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Components/Loader";
import Category from "./Category";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="lg:pt-10 pt-5 pb-5">
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-rose-400 to-rose-800 transition-all ease-in-out duration-100 mr-auto">
        Our Items
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-3 m-8">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
