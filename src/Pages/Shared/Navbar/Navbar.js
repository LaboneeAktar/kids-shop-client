import React from "react";
import logo from "../../../assets/images/kids-shop.png";
import userImg from "../../../assets/images/user-black.png";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-screen p-2 px-16">
      <div className="hidden md:flex">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-16" alt="" />
            <h1 className="text-3xl">Kids Shop</h1>
          </div>
        </Link>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="font-semibold hover:text-rose-800 cursor-pointer">
            Home
          </li>

          <li className="font-semibold hover:text-rose-800 cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="relative flex justify-center items-center">
          <MdOutlineShoppingCart className="text-2xl ml-8 cursor-pointer" />
          <div className="w-4 h-4 rounded-full bg-rose-700 flex justify-center items-center absolute -top-[-10px] -right-1">
            <p className="text-xs text-white">1</p>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <MdFavoriteBorder className="text-2xl ml-4 cursor-pointer" />
        </div>
        <span className="relative flex justify-center items-center">
          <motion.img
            src={userImg}
            className="w-9 ml-4 rounded-full drop-shadow-lg cursor-pointer"
            alt=""
            whileTap={{ scale: 0.6 }}
          />
        </span>
      </div>

      {/* Mobile Resposive */}
      <div className="flex md:hidden w-full"></div>
    </div>
  );
};

export default Navbar;
