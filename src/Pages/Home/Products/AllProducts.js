import React from "react";
import Accessories from "./Accessories";
import Bags from "./Bags";
import Dress from "./Dress";
import Shoes from "./Shoes";
import Toys from "./Toys";
import WinterCollections from "./WinterCollections";

const AllProducts = () => {
  return (
    <div>
      <Dress />
      <Toys />
      <Bags />
      <Shoes />
      <WinterCollections />
      <Accessories />
    </div>
  );
};

export default AllProducts;
