import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ProductData from "../Home/ProductData";
import Smartphones from "../Smartphones/Smartphones";
import Laptops from "../laptops/laptops";



const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "productdata",
                element: <ProductData />
            },
            {
                path: "smartphones",
                element: <Smartphones />
            },
            {
                path: "smartphones",
                element: <Smartphones />
            }
            ,
            {
                path: "laptops",
                element: <Laptops />
            }
        ]

    }

]);
export default router