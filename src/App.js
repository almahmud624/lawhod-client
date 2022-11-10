import React, { useContext } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";
import { DataContext } from "./Context/DataProvider";
import { PropagateLoader } from "react-spinners";

function App() {
  const { spinLoad } = useContext(DataContext);
  return (
    <>
      {spinLoad ? (
        <>
          <div className="grid place-items-center h-screen">
            <PropagateLoader
              color="#7c5138"
              loading={spinLoad}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <RouterProvider router={routes}></RouterProvider>
      )}
    </>
  );
}

export default App;
