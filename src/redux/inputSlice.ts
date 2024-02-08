import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "userInput",
    initialState: {
        value: ""
    },
    reducers: {
        updateInputValue: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { updateInputValue } = inputSlice.actions;
export default inputSlice.reducer;