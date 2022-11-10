import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { PropagateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="grid place-items-center h-96">
          <PropagateLoader
            color="#36d7b7"
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </>
    );
  }

  if (user?.uid) {
    console.log("hello");

    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
