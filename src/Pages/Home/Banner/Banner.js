import React from "react";
import BImage1 from "../../../assets/images/img1.jpg";
import BImage2 from "../../../assets/images/img2.jpg";
import BImage3 from "../../../assets/images/img3.jpg";
import BImage4 from "../../../assets/images/img4.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="py-20">
        <p className="bg-slate-200 w-32 px-2 py-1 rounded-md shadow-lg mx-auto lg:ml-0">
          In Short Time
        </p>

        <h1 className="lg:text-5xl text-3xl tracking-wider py-4 text-center lg:text-left">
          {" "}
          The Fastest and Easiest {""} <br />
          <span className="text-rose-700 font-bold">Online Shopping</span>{" "}
          <br /> for Kids
        </h1>

        <p className="lg:text-justify lg:pr-10 py-4 px-5 lg:px-0 text-center">
          Shopping for Kids from 0 to 14 years at best prices. Here you can buy
          kids necessary products easily and can save your time. Here you will
          get kids dresses, kids toys, kids footwear, kids bags and accessories.
        </p>

        <div className="text-center">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-rose-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-rose-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-rose-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Shop Now
            </span>
          </a>
        </div>
      </div>
      <div className="px-8 lg:px-0">
        <div className="bg-white px-5 py-10 rounded-xl drop-shadow-lg">
          <div className="grid grid-cols-2 gap-6 ml-16">
            <img src={BImage1} className="w-44" alt="" />
            <img src={BImage3} className="w-44" alt="" />
            <img src={BImage2} className="w-44" alt="" />
            <img src={BImage4} className="w-44" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
