import { createSlice } from "@reduxjs/toolkit";

const initialUiSlice = {cartIsVisible:true};

const uiSlice = createSlice({
    name: 'uii',
    initialState:initialUiSlice,
    reducers: {
        toggleCart: (state) => {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

console.log(uiSlice.reducer);

export const uiActions = uiSlice.actions;

export default uiSlice.reducer