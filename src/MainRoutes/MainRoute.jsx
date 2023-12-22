import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Pages/Shared/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import ManageTask from "../Pages/Dashboard/ManageTask/ManageTask";
import EditTask from "../Pages/Dashboard/EditTask/EditTask";

export const MyCreateRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        //all users routes
        {
          path:'userProfile',
          element:<UserProfile></UserProfile>
        },
        {
          path: 'createTask',
          element: <CreateTask></CreateTask>
        },
        {
          path: 'management',
          element: <ManageTask></ManageTask>
        },
        {
          path: 'editTask/:id',
          element: <EditTask></EditTask>,
          loader: ({params})=>fetch(`http://localhost:5000/tasks/${params.id}`)
        }
      ]
    }
  ]);
  