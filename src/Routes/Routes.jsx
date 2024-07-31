import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import ContactUs from "../pages/ContactUs/ContactUs";
import AddItem from "../pages/AddItem/AddItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/signUp",
                element: <SignUp ></SignUp>
            },
            {
                path: "/ourMenu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "/ourShop",
                element: <OurShop></OurShop>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path:'/addItem',
                element:<AddItem></AddItem>
            }

        ]
    },
]);