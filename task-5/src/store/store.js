import { configureStore } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";
import activeSliceReducer from "./activeSlice";


export const store = configureStore({
    reducer: {
       activeSliceReducer
    }
})

// export type RootState = ReturnType< typeof store.getState>;
// export type AppDispatch =  typeof store.dispatch;
