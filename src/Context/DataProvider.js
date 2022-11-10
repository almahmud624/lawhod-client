import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [spinLoad, setSpinLoad] = useState(true);

  // load practiceAreas data
  useEffect(() => {
    setSpinLoad(true);
    fetch("https://lawhod-server.vercel.app/practice-areas")
      .then((res) => res.json())
      .then((data) => {
        setPracticeAreas(data);
        setSpinLoad(false);
      });
  }, []);

  // load reviews data
  useEffect(() => {
    fetch("https://lawhod-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  // if (!!practiceAreas || !!reviews) {
  //   return;
  // }
  const dataCenter = {
    practiceAreas,
    setPracticeAreas,
    setReviews,
    reviews,
    spinLoad,
  };
  return (
    <DataContext.Provider value={dataCenter}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
