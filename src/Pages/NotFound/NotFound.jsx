import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300 mb-6">409</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The Product  you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
         
    </div>
  );
};

export default NotFound;
