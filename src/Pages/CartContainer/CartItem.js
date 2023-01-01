import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useStateValue } from "../../contexts/StateProvider";
import { actionType } from "../../contexts/reducer";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQuantity(quantity + 1);
      cartItems.map((item) => {
        if (item._id === id) {
          item.quantity += 1;
        }
      });
      cartDispatch();
    } else {
      if (quantity == 1) {
        setItems(cartItems.filter((item) => item.id !== id));
        cartDispatch();
      } else {
        setQuantity(quantity - 1);
        cartItems.map((item) => {
          if (item._id === id) {
            item.quantity -= 1;
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [quantity]);

  return (
    <div>
      <div className="w-full bg-slate-400 p-1 px-2 rounded-lg flex items-center gap-2">
        <img src={item.image} className="w-20 h-20 rounded-lg py-2" alt="" />
        <div className="flex flex-col gap-2">
          <p className="text-lg"> {item.name}</p>
          <p className="text-sm font-semibold">
            {parseFloat(item.price * quantity)}
          </p>
        </div>
        <div className="flex items-center gap-2 ml-auto cursor-pointer">
          <motion.div whileTap={{ scale: 0.75 }}>
            <FaMinus
              className="text-sm"
              onClick={() => updateQuantity("remove", item._id)}
            />
          </motion.div>
          <p className="text-[16px]">{quantity}</p>
          <motion.div whileTap={{ scale: 0.75 }}>
            <FaPlus
              className="text-sm"
              onClick={() => updateQuantity("add", item._id)}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
