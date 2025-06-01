import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutUs from "../presentation/pages/about-us/aboutUs.page";
import Home from "../presentation/pages/home/home.page";
import Products from "../presentation/pages/products/products.page";
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