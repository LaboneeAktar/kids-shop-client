import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import AllProducts from "../Products/AllProducts";

const Home = () => {
  return (
    <div className="pt-6 lg:pt-28 lg:px-20">
      <Banner />
      <Categories />
      <AllProducts />
    </div>
  );
};

export default Home;
