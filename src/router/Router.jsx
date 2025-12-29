// import {
//     createBrowserRouter,
    
//   } from "react-router-dom";
// import App from "../App";
// import ProjectsDetails from "../components/ProjectsDetails";
// import ErrorPage from "../components/ErrorPage";

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//     },
//     {
//       path: "/projects/:id",
//       element: <ProjectsDetails />
//     },
//     {
//       path: "*",
//       element: <ErrorPage />
//     },
//   ]);
//   export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectsDetails from "../components/ProjectsDetails";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home"; // we’ll create this

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects/:id",
        element: <ProjectsDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
