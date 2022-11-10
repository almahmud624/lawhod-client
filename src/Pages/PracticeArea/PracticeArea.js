import React from "react";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";

const PracticeArea = ({ practiceArea }) => {
  const { _id, practiceName, imgURL, shortDescription, fee } = practiceArea;

  return (
    <div>
      <div class="group relative block h-96">
        <span class="absolute inset-0 border-2 bg-gray-900 border-gray-900"></span>

        <div class="relative flex h-full transform items-end border-2 border-gray-900 bg-gray-800 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
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
          <div class="px-8 items-center w-full py-2 bg-gray-900 transition-opacity group-hover:absolute group-hover:opacity-0 z-10">
            <h2 class="mt-4 text-2xl font-medium text-gray-200">
              {practiceName}
            </h2>
          </div>

          <div class="absolute p-4 z-30 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
            <h3 class="mt-4 text-2xl font-medium text-gray-100">
              {practiceName}
            </h3>

            <p class="my-3 text-gray-300">
              {shortDescription.length > 100 ? (
                <>{shortDescription.slice(0, 100)}...</>
              ) : (
                shortDescription
              )}
            </p>
            <div className="mb-3 text-lg">
              ${fee}
              <span className="text-gray-600 text-sm"> /wk</span>
            </div>
            <Link
              to={`/practice-areas/${_id}`}
              class="inline-block border border-gray-300 px-4 py-2 font-semibold text-gray-200 z-50"
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
