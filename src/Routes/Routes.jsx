import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/Home/Estate/EstateDetails";
import UserProfile from "../Pages/UserProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('estate.json')
      },
      {
        path: '/estate-details/:id',
        element: <EstateDetails></EstateDetails>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register> ,
      },
      {
        path: '/user-profile',
        element: <UserProfile>,</UserProfile>
      }
    ]
  },
]);

export default router;