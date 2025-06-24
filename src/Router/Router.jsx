import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Register from "../LoginSection/Register";
import Login from "../LoginSection/Login";
import Logout from "../LoginSection/Logout";
import AllGroup from "../GroupSection/AllGroup";
import MyGroup from "../GroupSection/MyGroup";
import PrivateRouter from "../Context/PrivateRouter";
import CreateGroupForm from "../GroupSection/CreateGroupForm ";
import GroupDetails from "../GroupSection/GroupDetails";
import Update from "../Update/Update";
import NotFoundPage from "../NotFound/NotFoundPage";
import Loading from "../Component/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[{
        index:true,
        Component:Home,
    },
    {
        path:'/Regiester',
        Component:Register
    },
    {
        path:"/login",
        Component:Login
    },
    {
        path:"/logout",
        Component:Logout,
    },
    {
        path:'/allGroup',
        loader:()=>fetch('https://server-site-bay.vercel.app/group'),
        hydrateFallbackElement:<Loading></Loading>,

        // HydrateFallback:<h1>Loading....</h1>,
        element:<AllGroup></AllGroup>
    },
    {
        path:'/myGroup',
        loader:()=>fetch(`https://server-site-bay.vercel.app/group`),
        hydrateFallbackElement:<Loading></Loading>,

        element:<PrivateRouter><MyGroup></MyGroup></PrivateRouter>
        
    },
     {
        path:'/createGroup',
        element:<PrivateRouter><CreateGroupForm></CreateGroupForm></PrivateRouter>
        
    },
    {
        path:'/groupDetails/:id',
        loader:({params})=>fetch(`https://server-site-bay.vercel.app/group/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>,

        Component:GroupDetails,
    },
    {
        path:'/update/:id',
        loader:({params})=>fetch(`https://server-site-bay.vercel.app/group/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>,
        element:<PrivateRouter><Update></Update></PrivateRouter>

    },
    {
        path:'*',
        Component:NotFoundPage
    }
]
  },
]);