import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import PracticeArea from "../PracticeArea/PracticeArea";

const PracticeAreas = () => {
  const { practiceAreas } = useContext(DataContext);
  const practiseAreas = [1, 2, 3];
  console.log(practiceAreas);

  return (
    <div className="my-10 py-5">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl mb-8">Attorney Practice Areas</h1>
        <span>{practiceAreas.length}</span>
        <div className="wrapper grid grid-cols-3  gap-20 ">
          {practiseAreas?.map((parea) => (
            <PracticeArea key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
