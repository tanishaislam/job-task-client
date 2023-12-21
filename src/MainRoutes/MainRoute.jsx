import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Pages/Shared/Main/Main";
import Home from "../Pages/Home/Home";

export const MyCreateRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);
  