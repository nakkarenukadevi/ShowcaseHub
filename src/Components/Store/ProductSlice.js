import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        storedata: [],
        cart: []

    },
    reducers: {
        initialData: (state, action) => {
            state.storedata = action.payload

        },
        addtoCart: (state, action) => {

            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
            }

            else {
                state.cart.push({ ...newItem, quantity: 1 });
            }


        },
        increment: (state, action) => {
            const itemId = action.payload;
            const item = state.cart.find(item => item.id === itemId.id);
            if (item) {
                item.quantity += 1;
            }
        },
        dicrement: (state, action) => {
            const itemId = action.payload;
            const item = state.cart.find(item => item.id === itemId.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        deleteItem: (state, action) => {
            let dele = action.payload
            state.cart = state.cart.filter(item => item.id !== dele.id);


        }
    }

})
export const { initialData, addtoCart, increment, dicrement, deleteItem } = productSlice.actions;
export default productSlice.reducer;
