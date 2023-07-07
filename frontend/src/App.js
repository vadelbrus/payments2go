import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Documentaion from "./pages/Documentaion.js";
import Playground from "./pages/Playground.js";

import classes from "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/docs",
    element: <Documentaion />,
  },

  {
    path: "/playground",
    element: <Playground />,
  },
]);

function App() {
  document.body.style.backgroundColor = "#fcf9f4";
  return <RouterProvider router={router} />;
}

export default App;
