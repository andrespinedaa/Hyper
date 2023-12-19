import { configureStore } from "@reduxjs/toolkit";
import { panelSlices, panelStockSlice, langSlice } from "./slices";

export const store = configureStore({
  reducer: {
    LANG: langSlice.reducer,
    PANEL: panelSlices.reducer,
    PANEL_STOCK: panelStockSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch