import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Home from "../components/page/Home/Home";
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;