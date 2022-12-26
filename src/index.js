import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from "../src/pages/Home";
import Services from "../src/pages/Services";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<h1>Sorry , no page here  ;&#41;</h1>
  },
 
  {
    path:"/services",
    element:<Services/>,
    errorElement:<h1>Sorry , no page here  ;&#41;</h1>
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement:<h1>Sorry , no page here  ;&#41;</h1>
  },
  {
    path:"/about",
    element:<About/>,
    errorElement:<h1>Sorry , no page here  ;&#41;</h1>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(      
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>
);

