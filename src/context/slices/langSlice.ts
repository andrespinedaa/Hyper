import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { lenguages } from "../../interfaces/lenguage";
import { English, Español } from "../../data/lenguages";

const initialState: lenguages = {
  lenguages: {
    english: English,
    spanish: Español,
  },
  current: Español,
};

const langSlice = createSlice({
  name: "LANG",
  initialState: initialState,
  reducers: {
    CHANGE_LANG: (state, action: PayloadAction<string>) => {},
  },
});

export const { CHANGE_LANG } = langSlice.actions;

export default langSlice;
