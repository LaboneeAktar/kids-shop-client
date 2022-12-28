import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span>
        <div className="relative">
          <div className="w-20 h-20 border-purple-300 border-2 rounded-full"></div>
          <div className="w-20 h-20 border-purple-900 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>

        <div className="relative">
          <div className="w-10 h-10 border-purple-300 border-2 rounded-full"></div>
          <div className="w-10 h-10 border-purple-900 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>

        <div className="relative">
          <div className="w-5 h-5 border-purple-300 border-2 rounded-full"></div>
          <div className="w-5 h-5 border-purple-900 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
      </span>
    </div>
  );
};

export default Loader;
