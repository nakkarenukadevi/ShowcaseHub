import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ProductData from "../Home/ProductData";

import Category from "../category/Category";
import SingelProduct from "../singelProduct/SingelProduct";
import Product from "../Product";
import Productdetails from "../Productdetails/Productdetails";
import Cart from "../Cart/Cart";
import Fotter from "../Fotter/Fotter";
import Partice from "../Partice";
import Button from "../Home/BhanuButton/Button";




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
                path: "product",
                element: <Product />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "category",
                element: <Category />
            },
            {
                path: "/category/singelproduct/:id",
                element: <SingelProduct />

            }
            , {
                path: "category/singelproduct/:id/productdetails/:id",
                element: <Productdetails />
            },
            {
                path: "fotter",
                element: <Fotter />
            },
            {
                path: "partice",
                element: <Partice />

            }
            ,
            {
                path: "button",
                element: <Button />

            }
        ]

    }

]);
export default router