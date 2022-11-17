import React from "react";
import { Link } from "react-router-dom";
import useDynamicTitle from "../../Hook/useDynamicTitle";
const ErrorPage = () => {
  // / title show dynamically
  useDynamicTitle("404 Error");
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto h-screen grid place-items-center">
          <div className="w-full sm:w-96  bg-gray-600 shadow-lg rounded-lg overflow-hidden relative mx-auto">
            {/* <img
              src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Connor Botts"
              className="w-full h-full object-cover object-center absolute inset-0"
            /> */}
            <div className="flex flex-col justify-center items-center relative p-8 md:p-16">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
                404
              </h1>

              <p className="text-gray-200 md:text-lg text-center mb-8">
                The page you’re looking for doesn’t exist.
              </p>

              <Link
                to="/"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
