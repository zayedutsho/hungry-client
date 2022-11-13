import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Update from "../../Pages/MyReviews/Update";
import AddServices from "../../Pages/Service/AddServices/AddServices";
import Review from "../../Pages/Service/ServiceDetails/Review";
import ServiceDetails from "../../Pages/Service/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Service/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(` https://new-server-seven.vercel.app/review/${params.id}`),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        loader: () => fetch(" https://new-server-seven.vercel.app/services"),
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(` https://new-server-seven.vercel.app/services/${params.id}`),
      },
      {
        path: "/reviews/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(` https://new-server-seven.vercel.app/services/${params.id}`),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
    ],
  },
  //   {
  //     path: "/",
  //     element: <CoursesMain></CoursesMain>,
  //     children: [
  //       {
  //         path: "/courses",
  //         element: <Courses></Courses>,
  //       },
  //       {
  //         path: "/courses/:id",
  //         element: <CourseID></CourseID>,
  //       },
  //       {
  //         path: "courses/category/:id",
  //         element: <Category></Category>,
  //         loader: ({ params }) =>
  //           fetch(
  //             `https://coding-shikhi-server-taamzid.vercel.app/courses/${params.id}`
  //           ),
  //       },
  //       {
  //         path: "/checkout/:id",
  //         element: (
  //           <PrivateRoute>
  //             <Checkout></Checkout>,
  //           </PrivateRoute>
  //         ),
  //         loader: ({ params }) =>
  //           fetch(
  //             `https://coding-shikhi-server-taamzid.vercel.app/courses/${params.id}`
  //           ),
  //       },
  //     ],
  //   },
  {
    path: "*",
    element: <div className="text-center">404 PAGE NOT FOUND!</div>,
  },
]);
