import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Home from "../components/page/Home/Home";
import Alltoys from "../components/page/Alltoys/Alltoys";
import Blog from "../components/page/Blog/Blog";
import Login from "../components/page/Login/Login";
import ToyDetails from "../components/page/shared/ToyDetails/ToyDetails";
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/alltoy',
            element:<Alltoys></Alltoys>,
            loader: ()=>fetch('http://localhost:5000/cars'),
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/details/:id',
          element:<ToyDetails></ToyDetails>,
          loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`)
        }
        
      ]
    },
  ]);

  export default router;