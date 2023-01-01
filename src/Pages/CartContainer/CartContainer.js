import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../../contexts/StateProvider";
import { actionType } from "../../contexts/reducer";
import CartItem from "./CartItem";

const CartContainer = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="fixed top-20 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md z-[101]"
      >
        <div className="flex justify-between">
          <motion.div className=" p-4 cursor-pointer" onClick={showCart}>
            <MdOutlineKeyboardBackspace className="text-3xl" />
          </motion.div>
          <p className="text-lg p-4 font-semibold">Cart</p>
          <p className="text-xl p-4 cursor-pointer mt-1 text-rose-500">
            <MdDeleteOutline />
          </p>
        </div>

        <div className="w-full h-full bg-gray-200 flex flex-col">
          <div className="w-full px-6 py-10 flex flex-col gap-3 overflow-y-scroll">
            {cartItems &&
              cartItems.map((item) => <CartItem key={item._id} item={item} />)}
          </div>
          {/* <div className="px-4">
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p>500 TK</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p> 150 TK</p>
            </div>
            <div className="w-full border-b border-gray-800 my-2"></div>
            <div className="flex justify-between mb-5">
              <p>Total</p>
              <p> 650 TK</p>
            </div>
          </div>
          <button className="w-full bg-blue-800 text-white py-2 rounded-md">
            Check Out
          </button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default CartContainer;
