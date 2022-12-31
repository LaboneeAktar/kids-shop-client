import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../../contexts/StateProvider";
import { actionType } from "../../contexts/reducer";

const CartContainer = () => {
  const [{ cartShow }, dispatch] = useStateValue();
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
            <div className="w-full bg-slate-400 p-1 px-2 rounded-lg flex items-center gap-2">
              <img
                src="https://thumbs.dreamstime.com/b/newborn-baby-boy-set-blue-clothes-as-bodysuit-booties-toys-white-table-top-down-newborn-baby-boy-set-blue-clothes-as-bodysuit-165178062.jpg"
                className="w-20 h-20 rounded-lg py-2"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <p className="text-lg"> Baby Cloth</p>
                <p className="text-sm font-semibold">$20</p>
              </div>
              <div className="flex items-center gap-2 ml-auto cursor-pointer">
                <motion.div whileTap={{ scale: 0.75 }}>
                  <FaMinus className="text-sm" />
                </motion.div>
                <p className="text-[16px]">1</p>
                <motion.div whileTap={{ scale: 0.75 }}>
                  <FaPlus className="text-sm" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="px-4">
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
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CartContainer;
