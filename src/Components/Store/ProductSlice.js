import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: { storedata: [] },
    reducers: {
        initialData: (state, action) => {
            state.storedata = action.payload

        }


    }

})
export const { initialData } = productSlice.actions;
export default productSlice.reducer;
