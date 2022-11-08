import React, { createContext, useState } from "react";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [practiceAreas, setPracticeAreas] = useState([]);
  const dataCenter = { practiceAreas, setPracticeAreas };
  return (
    <DataContext.Provider value={dataCenter}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
