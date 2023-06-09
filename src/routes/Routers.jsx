import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Home from "../components/page/Home/Home";
import Alltoys from "../components/page/Alltoys/Alltoys";
import Blog from "../components/page/Blog/Blog";
import Login from "../components/page/Login/Login";
import ToyDetails from "../components/page/shared/ToyDetails/ToyDetails";
import Signup from "../components/page/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AddAtoy from "../components/page/AddAtoy/AddAtoy";
import MyToy from "../components/page/MyToy/MyToy";
import UpdateInfo from "../components/page/UpdateInfo/UpdateInfo";
import NotFound from "../components/page/NotFound/NotFound";
  

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
            loader: ()=>fetch('https://car-craze-server.vercel.app/carsLimit'),
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
            loader: ()=> fetch('https://car-craze-server.vercel.app/blogs')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader:({params})=> fetch(`https://car-craze-server.vercel.app/details/${params.id}`)
        },
        {
          path:'/addtoy',
          element:<PrivateRoute><AddAtoy></AddAtoy></PrivateRoute>
        },
        {
          path:'/mytoy',
          element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>,
          loader:({params})=> fetch(`https://car-craze-server.vercel.app/details/${params.id}`)
        }
        
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);

  export default router;