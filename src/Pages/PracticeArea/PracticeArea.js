import React from "react";
import { Link } from "react-router-dom";

const PracticeArea = ({ practiceArea }) => {
  const { _id, name, imgURL, shortDescription, fee } = practiceArea;

  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src={imgURL}
          alt=" random imgee" // pic size 350 x 350 (perfect)
          className="w-full object-cover object-center rounded-lg shadow-md "
        />

        <div className="px-4 w-full   cursor-pointer transition-all duration-500">
          <div className="bg-[#3F3B6C] text-[#A3C7D6] p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold capitalize leading-tight text-[#A3C7D6]">
              {name}
            </h4>
            <div className="description">
              <span>{shortDescription}</span>
            </div>
            <div className="mt-1 mb-5 text-lg">
              ${fee}
              <span className="text-gray-600 text-sm"> /wk</span>
            </div>
            {/* <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                4/5 ratings{" "}
              </span>
              <span className="text-sm text-gray-600">
                (based on 234 ratings)
              </span>
            </div> */}
            <Link
              to={`/practice-areas/${_id}`}
              className="bg-[#624F82] text-[#A3C7D6] px-4 py-2 border border-[#A3C7D6] mt-6 rounded-sm font-semibold"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
