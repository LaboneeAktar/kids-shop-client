import React from "react";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <div className="pt-28">
        <h1>This is home</h1>
      </div>
    </AnimatePresence>
  );
};

export default Home;
