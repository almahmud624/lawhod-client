import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";
import useDynamicTitle from "../../Hook/useDynamicTitle";
import PracticeArea from "../PracticeArea/PracticeArea";
import { PropagateLoader } from "react-spinners";

const PracticeAreas = () => {
  const { practiceAreas, spinLoad } = useContext(DataContext);
  const [limitedPreactice, setLimitedPreactice] = useState([]);

  // title show dynamically
  useDynamicTitle("All Practice Areas");

  const location = useLocation();
  const home = location?.pathname === "/" || location?.pathname === "/home";

  useEffect(() => {
    fetch("https://lawhod-server.vercel.app/practice-areas?size=3")
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
    <div className="py-20 bg-gray-700">
      {spinLoad ? (
        <>
          <>
            <div className="grid place-items-center h-screen">
              <PropagateLoader
                color="#36d7b7"
                loading={spinLoad}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </>
        </>
      ) : (
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="mb-10">
            <h2 className="md:text-5xl text-3xl text-[#ddd0c8]">
              Attorney Practice Areas
            </h2>
            <hr className="max-w-[12rem] border-gray-500" />
          </div>
          <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 ">
            {showPractise?.map((practiceArea) => (
              <PracticeArea key={Math.random()} practiceArea={practiceArea} />
            ))}
          </div>
          {home && (
            <div className="text-center mt-10">
              <Link
                to="/practice-areas"
                class="inline-flex h-12 w-1/2  items-center justify-center border-2 border-transparent rounded bg-[#7c5138] md:px-10 text-base px-4 font-medium tracking-wide text-white shadow-md md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-transparent hover:border-[#7c5138] hover:text-white  transition-all duration-500 capitalize"
              >
                See All{" "}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeAreas;
