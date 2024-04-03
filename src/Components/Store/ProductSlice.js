import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: { storedata: [] },
    reducers: {
        initialData: (state, action) => {

        }


    }

})
export const { initialData } = productSlice.actions;
export default productSlice;
