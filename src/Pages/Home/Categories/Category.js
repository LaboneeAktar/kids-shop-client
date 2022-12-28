import React from "react";
import { motion } from "framer-motion";

const Category = ({ category }) => {
  const { title, img } = category;
  return (
    <section className="w-full my-6" id="menu">
      <motion.div
        className="w-full flex flex-col items-center justify-center bg-white p-5 h-40 rounded-md drop-shadow-xl"
        whileTap={{ scale: 0.75 }}
      >
        <img src={img} className="w-16" alt="" />
        <p className="pt-2 font-semibold text-center">{title}</p>
      </motion.div>
    </section>
  );
};

export default Category;
