import { createSlice } from "@reduxjs/toolkit";

const initialUiSlice = {
    cartIsVisible:true,
    notification: null
};

const uiSlice = createSlice({
    name: 'uii',
    initialState:initialUiSlice,
    reducers: {
        toggleCart: (state) => {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification: (state, action) => {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

console.log(uiSlice.reducer);

export const uiActions = uiSlice.actions;

export default uiSlice.reducer