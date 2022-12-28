import React, { useContext, useState } from "react";
import logo from "../../../assets/images/kids-shop.png";
import userImg from "../../../assets/images/user-black.png";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdLogout,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, googleSignIn, logOut } = useContext(AuthContext);
  const [isMenu, setIsMenu] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    if (!user) {
      googleSignIn(googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast.success("Welcome!! Login Successfull.");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsMenu(!isMenu);
    }
  };

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Successfully Logged Out");
      navigate("/");
    });
  };

  return (
    <div>
      <div className="fixed z-50 w-screen p-3 px-4 lg:p-2 lg:px-16 bg-white">
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
          <div className="relative flex justify-center items-center">
            {user && user.photoURL ? (
              <>
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={user.photoURL}
                  className="w-9 ml-4 rounded-full drop-shadow-lg cursor-pointer"
                  alt=""
                  onClick={handleGoogleLogIn}
                  title={user.displayName}
                />
                {isMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-36 bg-white shadow-lg rounde-xl absolute flex flex-col top-14 right-[-16px]"
                  >
                    {user && user.email === "labonipub@gmail.com" && (
                      <>
                        <Link to="/addproduct">
                          <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out">
                            Add Product
                          </p>
                        </Link>
                        <Link to="/allproducts">
                          <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out">
                            All Products
                          </p>
                        </Link>
                      </>
                    )}
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out justify-center bg-slate-300"
                      onClick={handleLogOut}
                    >
                      Log Out <MdLogout />
                    </p>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={userImg}
                className="w-9 ml-4 rounded-full drop-shadow-lg cursor-pointer"
                alt=""
                onClick={handleGoogleLogIn}
                title="Login Here"
              />
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-between md:hidden w-full h-full ">
          <div className="flex">
            <div className="relative flex justify-center items-center">
              <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
              <div className="w-4 h-4 rounded-full bg-rose-700 flex justify-center items-center absolute -top-[10px] -right-1">
                <p className="text-xs text-white">1</p>
              </div>
            </div>
            <MdFavoriteBorder className="text-2xl ml-2 cursor-pointer" />
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="w-10 object-cover" alt="logo" />
            <h1 className="text-headingColor text-xl font-bold"> Kids Shop </h1>
          </Link>

          <div className="relative">
            {user && user.photoURL ? (
              <>
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={user.photoURL}
                  className="w-9 ml-4 rounded-full drop-shadow-lg cursor-pointer"
                  alt=""
                  onClick={handleGoogleLogIn}
                  title={user.displayName}
                />
                {isMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-36 bg-white shadow-lg rounde-xl absolute flex flex-col top-14 right-[-16px]"
                  >
                    <Link to="/">
                      <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out">
                        Home
                      </p>
                    </Link>
                    <Link to="/contact">
                      <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out">
                        Contact
                      </p>
                    </Link>
                    {user && user.email === "labonipub@gmail.com" && (
                      <>
                        <Link to="/addproduct">
                          <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out">
                            Add Product
                          </p>
                        </Link>
                        <Link to="/allproducts">
                          <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out">
                            All Products
                          </p>
                        </Link>
                      </>
                    )}

                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out justify-center bg-slate-300"
                      onClick={handleLogOut}
                    >
                      Log Out <MdLogout />
                    </p>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={userImg}
                className="w-9 ml-4 rounded-full drop-shadow-lg cursor-pointer"
                alt=""
                onClick={handleGoogleLogIn}
                title="Login Here"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
