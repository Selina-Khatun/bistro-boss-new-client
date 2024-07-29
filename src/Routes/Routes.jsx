import {
    createBrowserRouter,
    
} from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Home from "../components/pages/Home/Home/Home";
import Main from "../Layout/Main";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    },
]);