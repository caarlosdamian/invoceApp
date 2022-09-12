import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RowInfo } from "../../interfaces";
import initialState from "../../utils/data.json";

export const invoceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = invoceSlice.actions;

export default invoceSlice.reducer;

export const selectPostsByUser = createSelector(
  (state: RowInfo[]) => state,
  (state) => {
    const pending = state.filter((item: RowInfo) => item.status === "pending");
    return pending.length;
  }
);
