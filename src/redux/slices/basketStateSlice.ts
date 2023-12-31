import { createSlice } from "@reduxjs/toolkit";

interface Basket {
    isShowing: boolean;
}

const initialState: Basket = {
    isShowing: false
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        open: (state) => {
            state.isShowing = true
        },
        close: (state) => {
            state.isShowing = false
        }
    }
})

export const { open, close } = basketSlice.actions
export default basketSlice.reducer