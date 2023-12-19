import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PanelFormat } from "../../interfaces/formats";

const initialState :PanelFormat = {
    id: 0,
    blade: 0,
    color: "",
    height: 0,
    width: 0,
    veta: false
} 

const panelSlice = createSlice ({
    name: "PANEL",
    initialState: initialState,
    reducers: {
        EDIT_PANEL: (state, action: PayloadAction) => {
        }
    }
})

export const { EDIT_PANEL } = panelSlice.actions

export default panelSlice;