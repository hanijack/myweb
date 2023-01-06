import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { useContext } from "react";
import Home from "../src/pages/Home";
import Services from "../src/pages/Services";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import { Context } from './components/Context'
import React from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry , no page here ;&#41;</h1>,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);


function App() {
  const {theme}= useContext(Context)
  return (
    <div className={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
