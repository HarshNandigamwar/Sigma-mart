import React from "react";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      {/* Circle loader animation */}
      <div className="w-13 h-13 flex justify-center items-center border-4 border-dashed rounded-full animate-spin border-amber-600">
        🏵️
      </div>
      {/* SigmaMart logo Animation */}
      <h1 className="text-5xl font-bold text-amber-600 tracking-wider">
        <div className="animate-pulse">SigmaMart</div>
      </h1>
    </div>
  );
};

export default Loader;
