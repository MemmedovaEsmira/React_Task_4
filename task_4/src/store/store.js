import { configureStore } from "@reduxjs/toolkit";
import activeSliceReducer from "./activeSlice";


export default configureStore({
    reducer: {
       activeSliceReducer
    }
})
