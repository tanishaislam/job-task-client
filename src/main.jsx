import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { MyCreateRoutes } from './MainRoutes/MainRoute.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={MyCreateRoutes} />
    </QueryClientProvider>
    <Toaster />
    </AuthProviders>
    
)
