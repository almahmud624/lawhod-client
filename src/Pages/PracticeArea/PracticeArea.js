import React from "react";
import { Link } from "react-router-dom";

const PracticeArea = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGF3eWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=" random imgee" // pic size 350 x 350 (perfect)
          className="w-full object-cover object-center rounded-lg shadow-md"
        />

        <div className="px-4 w-full absolute -bottom-48 left-[50%] translate-x-[-50%] text-center hover:bottom-0 cursor-pointer transition-all duration-500">
          <div className="bg-[#3F3B6C] text-[#A3C7D6] p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold capitalize leading-tight text-[#A3C7D6]">
              Personal Injury Attorney Practice Areas
            </h4>
            <div className="description">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                nihil illum tempora! Esse enim quo numquam officia dolorum
                ducimus cupiditate...
              </span>
            </div>
            <div className="mt-1">
              $1800
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
              to="/practice-details"
              className="bg-[#624F82] text-[#A3C7D6] px-4 py-2 border border-[#A3C7D6] mt-3 rounded-sm font-semibold"
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
