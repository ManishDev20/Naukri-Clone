import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Jobs from "./Jobs";
import Companies from "./Companies";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "jobs",
          element: <Companies />,
        },
        {
          path: "companies",
          element: <Jobs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
