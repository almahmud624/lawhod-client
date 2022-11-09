import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [reviews, setReviews] = useState([]);

  // load practiceAreas data
  useEffect(() => {
    fetch("http://localhost:4000/practice-areas")
      .then((res) => res.json())
      .then((data) => {
        setPracticeAreas(data);
      });
  }, []);

  console.log(practiceAreas);

  const dataCenter = {
    practiceAreas,
    setPracticeAreas,
    setReviews,
    reviews,
  };
  return (
    <DataContext.Provider value={dataCenter}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
