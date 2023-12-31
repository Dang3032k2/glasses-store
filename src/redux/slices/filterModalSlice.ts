import { createSlice } from "@reduxjs/toolkit";

interface FilterModal {
    isShowing: boolean
}

const initialState: FilterModal = {
    isShowing: false
}

const filterModalSlice = createSlice({
    name: "filterModal",
    initialState: initialState,
    reducers: {
        openModal: (state) => {
            state.isShowing = true
        },
        closeModal: (state) => {
            state.isShowing = false
        }
    }
})

export const { openModal, closeModal } = filterModalSlice.actions
export default filterModalSlice.reducer