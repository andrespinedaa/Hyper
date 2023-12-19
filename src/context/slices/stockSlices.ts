import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PanelStock } from "../../interfaces/formats";

const initalState: PanelStock = {
  stock: {
    monocromo: [],
    woods: [],
  },
};

const panelStockSlice = createSlice({
  name: "PANEL_STOCK",
  initialState: initalState,
  reducers: {
    ADD_PANEL: (state, action: PayloadAction) => {},
    DELETE_PANEL: (state, action: PayloadAction) => {},
  },
});

export const { ADD_PANEL, DELETE_PANEL } = panelStockSlice.actions;

export default panelStockSlice; 
