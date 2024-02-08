import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import inputReducer from "./inputSlice";

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        userInput: inputReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch