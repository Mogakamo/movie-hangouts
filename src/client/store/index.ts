import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import userSlice from "../features/authSlice";


const store = configureStore({
    reducer: {
        userAuth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store