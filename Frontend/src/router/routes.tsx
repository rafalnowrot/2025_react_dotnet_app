import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutUs from "../presentation/pages/about-us/aboutUs";
import Home from "../presentation/pages/home/Home";
import Products from "../presentation/pages/products/products";
import Main from "../presentation/pages/main";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children : [

            {
            path: '/',
            element: <Home/>
            },
            {
            path: 'AboutUs',
            element: <AboutUs/>
            },
            {
            path: 'Products',
            element: <Products/>
            }]
        },


]);

export default router;