import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({

    name: 'isActive',
    initialState: { theme: false },
    reducers: {

        handleActive: (state) => {
            state.theme = !state.theme
        }
    }
})


export default activeSlice.reducer
export const { handleActive } = activeSlice.actions