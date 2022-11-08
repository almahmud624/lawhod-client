import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddPracticeArea from "../Pages/AddPracticeArea/AddPracticeArea";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PracticeAreaDetails from "../Pages/PracticeAreaDetails/PracticeAreaDetails";
import PracticeAreas from "../Pages/PracticeAreas/PracticeAreas";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/practice-areas", element: <PracticeAreas /> },
      { path: "/practice-details", element: <PracticeAreaDetails /> },
      { path: "/add-practice", element: <AddPracticeArea /> },
      { path: "/my-review", element: <MyReviews /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);
