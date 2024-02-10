import cartSlice from "./Slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})