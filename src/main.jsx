import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { MyCreateRoutes } from './MainRoutes/MainRoute.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={MyCreateRoutes} />
    </AuthProviders>
    <Toaster />
  </React.StrictMode>,
)
