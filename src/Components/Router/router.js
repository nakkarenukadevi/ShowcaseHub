import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ProductData from "../Home/ProductData";



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
            }
        ]

    }

]);
export default router