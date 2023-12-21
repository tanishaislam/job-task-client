import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { MyCreateRoutes } from './MainRoutes/MainRoute.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MyCreateRoutes} />
  </React.StrictMode>,
)
