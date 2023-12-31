import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketStateSlice'
import filterModalReducer from './slices/filterModalSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        filterModal: filterModalReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch