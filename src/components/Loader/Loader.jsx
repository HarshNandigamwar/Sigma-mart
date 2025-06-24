import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="container">
        <div className="wrapper">
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
          <div className="loader">
            <div className="dot"></div>
          </div>
        </div>
      </div>

      {/* SigmaMart logo Animation */}
      <h1 className="text-5xl font-bold text-amber-600 tracking-wider">
        <div className="flex">
          <div className="animate-pulse">Sigma</div>
          <div className="animate-pulse">Mart</div>
        </div>
      </h1>
    </div>
  );
};

export default Loader;
