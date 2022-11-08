import React, { createContext, useState } from "react";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [practiceAreas, setPracticeAreas] = useState(null);
  const [reviews, setReviews] = useState(null);
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
