import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/Home/Estate/EstateDetails";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>
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
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute> ,
      }
    ]
  },
]);

export default router;