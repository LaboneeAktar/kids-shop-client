import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../contexts/StateProvider";
import { actionType } from "../contexts/reducer";

const ProductCart = ({ product }) => {
  const { name, price, image } = product;
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <section className="w-full my-6" id="product">
      <div className="w-full items-center justify-center bg-white py-5 px-2 h-full rounded-md drop-shadow-2xl cursor-pointer">
        <motion.img
          src={image}
          whileHover={{ scale: 0.8 }}
          className="w-56 h-56 pl-7"
          alt=""
        />
        <p className="pt-2 pb-4 font-semibold text-center text-xl">{name}</p>
        <div className="flex justify-between px-3">
          <p className=" font-semibold">
            Price: <span className="text-rose-700"> {price}</span> Tk
          </p>
          <span className="flex items-center justify-center">
            <MdOutlineShoppingCart
              className="text-2xl ml-4 cursor-pointer"
              title="Add to Cart"
              onClick={() => setItems([...cartItems, product])}
            />
            <MdFavoriteBorder
              className="text-2xl ml-4 cursor-pointer"
              title="Add to Favorite"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
