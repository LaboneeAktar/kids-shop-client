import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div className="pt-6 lg:pt-28 lg:px-20">
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
