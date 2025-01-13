import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import ProjectsDetails from "../components/ProjectsDetails";
import ErrorPage from "../components/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/projects/:id",
      element: <ProjectsDetails></ProjectsDetails>
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    },
  ]);
  export default router;