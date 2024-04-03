import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice"

const Store = configureStore({
    reducer: {
        product: productReducer,


    }
});
export default Store