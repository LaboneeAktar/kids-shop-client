import React, { useEffect } from "react";
import { useStateValue } from "../../../contexts/StateProvider";
import CartContainer from "../../CartContainer/CartContainer";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import AllProducts from "../Products/AllProducts";

const Home = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  useEffect(() => {}, [cartShow]);
  return (
    <div className="pt-6 lg:pt-28 lg:px-20">
      <Banner />
      <Categories />
      <AllProducts />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default Home;
