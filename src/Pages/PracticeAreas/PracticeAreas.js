import React from "react";
import PracticeArea from "../PracticeArea/PracticeArea";

const PracticeAreas = () => {
  const practiseAreas = [1, 2, 3];
  return (
    <div className="my-10 py-5">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl mb-8">Attorney Practice Areas</h1>
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
