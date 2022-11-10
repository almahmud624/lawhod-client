import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";
import PracticeArea from "../PracticeArea/PracticeArea";

const PracticeAreas = () => {
  const { practiceAreas } = useContext(DataContext);
  const [limitedPreactice, setLimitedPreactice] = useState([]);
  const location = useLocation();
  const home = location?.pathname === "/" || location?.pathname === "/home";

  useEffect(() => {
    fetch("http://localhost:4000/practice-areas?size=3")
      .then((res) => res.json())
      .then((data) => {
        setLimitedPreactice(data);
      });
  }, []);

  let showPractise;
  if (home) {
    showPractise = limitedPreactice;
  } else {
    showPractise = practiceAreas;
  }

  return (
    <div className="my-5 py-20 pb-16 bg-gray-600">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl text-gray-200">Attorney Practice Areas</h2>
          <hr className="max-w-[12rem] border-gray-400" />
        </div>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 ">
          {showPractise?.map((practiceArea) => (
            <PracticeArea key={Math.random()} practiceArea={practiceArea} />
          ))}
        </div>
        {home && (
          <div className="text-center">
            <Link
              to="/practice-areas"
              className="px-10 py-2 text-lg font-semibold text-gray-200 border mt-10 inline-block "
            >
              See All
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeAreas;
