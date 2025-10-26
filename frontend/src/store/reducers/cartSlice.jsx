import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts : [],
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        loadcarts : (state, action) => {
            state.carts = action.payload;
        }
    }
})

export const  {loadcart} = cartSlice.actions;
export default cartSlice.reducer;