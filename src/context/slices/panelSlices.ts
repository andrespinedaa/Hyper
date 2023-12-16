import { createSlice } from "@reduxjs/toolkit";
import { PanelFormat } from "../../interfaces/formats";

const initialState :PanelFormat = {
    blade: 0,
    color: "",
    height: 0,
    width: 0,
    veta: false
} 

const panelSlice = createSlice ({
    name: "panels",
    initialState: initialState,
    reducers: {
        EDITA_PANEL: (state, action) => {
        }
    }
})

export const { EDITA_PANEL } = panelSlice.actions

export default panelSlice;