import React from "react";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";

const PracticeArea = ({ practiceArea }) => {
  const { _id, practiceName, imgURL, shortDescription, fee } = practiceArea;

  return (
    <div>
      <div className="group relative block h-96">
        <span className="absolute inset-0 border-2 bg-gray-900 border-gray-900"></span>

        <div className="relative flex h-full transform items-end border-2 border-gray-900 bg-gray-800 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="bg-gray-800  transition-all duration-500">
            {/** Photo view in large scale */}
            <PhotoView src={imgURL}>
              <img
                src={imgURL}
                className="absolute top-0 left-0 object-cover h-full group-hover:mix-blend-overlay transition-all duration-500"
                alt=""
              />
            </PhotoView>
          </div>
          <div className="px-8 items-center w-full py-2 bg-gray-900 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
            <h2 className="mt-4 text-2xl font-medium text-gray-200 capitalize">
              {practiceName}
            </h2>
          </div>

          <div className="absolute p-4 z-30 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
            <h3 className="mt-4 text-2xl font-medium text-gray-100 capitalize">
              {practiceName}
            </h3>

            <p className="my-3 text-gray-300">
              {shortDescription.length > 100 ? (
                <>{shortDescription.slice(0, 100)}...</>
              ) : (
                shortDescription
              )}
            </p>
            <div className="mb-3 text-lg text-gray-200">
              ${fee}
              <span className="text-sm"> /wk</span>
            </div>
            <Link
              to={`/practice-areas/${_id}`}
              className="inline-block border-2 border-[#7c5138] hover:bg-transparent hover:border-[#7c5138] hover:text-white  transition-all  duration-500 capitalize bg-[#7c5138] px-4 py-2 font-semibold text-gray-200 z-50"
            >
              Practice Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
