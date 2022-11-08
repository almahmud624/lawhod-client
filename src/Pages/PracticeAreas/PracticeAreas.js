import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import PracticeArea from "../PracticeArea/PracticeArea";

const PracticeAreas = () => {
  const { practiceAreas } = useContext(DataContext);

  return (
    <div className="my-10 py-5">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl mb-8">Attorney Practice Areas</h1>
        <div className="wrapper grid grid-cols-3  gap-20 ">
          {practiceAreas?.map((practiceArea) => (
            <PracticeArea key={Math.random()} practiceArea={practiceArea} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
