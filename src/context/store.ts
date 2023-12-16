import { configureStore } from "@reduxjs/toolkit";
import { panelSlices } from "./slices";

export const store = configureStore({
    reducer: panelSlices.reducer
});