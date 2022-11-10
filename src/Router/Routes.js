import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddPracticeArea from "../Pages/AddPracticeArea/AddPracticeArea";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LoginSignUp from "../Pages/LoginSignUp/LoginSignUp";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PracticeAreaDetails from "../Pages/PracticeAreaDetails/PracticeAreaDetails";
import PracticeAreas from "../Pages/PracticeAreas/PracticeAreas";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/practice-areas", element: <PracticeAreas /> },
      {
        path: "/practice-areas/:id",
        element: <PracticeAreaDetails />,
        loader: ({ params }) =>
          fetch(`https://lawhod-server.vercel.app/practice-areas/${params.id}`),
      },
      { path: "/login", element: <LoginSignUp /> },
      {
        path: "/add-practice",
        element: (
          <PrivateRoute>
            <AddPracticeArea />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-review",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);
