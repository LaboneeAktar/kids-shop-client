import React from "react";
import { motion } from "framer-motion";

const Category = ({ category }) => {
  const { title, img, connection } = category;
  return (
    <section className="w-full my-6">
      <a href={`#${connection}`}>
        <motion.div
          className="w-full flex flex-col gap-3 items-center justify-center bg-white hover:border hover:border-rose-700 py-5 px-2 h-40 rounded-md drop-shadow-2xl cursor-pointer"
          whileTap={{ scale: 0.75 }}
        >
          <img src={img} className="w-20" alt="" />
          <p className="pt-2 font-semibold text-center">{title}</p>
        </motion.div>
      </a>
    </section>
  );
};

export default Category;
