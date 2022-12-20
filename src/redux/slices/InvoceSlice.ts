import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RowInfo } from "../../interfaces";
import { getRandoId } from "../../utils";
import invoces from "../../utils/data.json";

interface InvoiceState {
  invoces: any;
  selectedFilter: string[];
  showFilter: boolean;
}
const initialState: InvoiceState = {
  invoces,
  selectedFilter: [],
  showFilter: false,
};
export const invoceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    filterByStatus: (state, action) => {
      if (state.selectedFilter.indexOf(action.payload) === -1) {
        state.selectedFilter.push(action.payload);
      } else {
        return state;
      }
    },
    removeFilter: (state, action) => {
      const index = state.selectedFilter.indexOf(action.payload);
      if (index > -1) {
        state.selectedFilter.splice(index, 1);
      }
    },
    showFilterToggle: (state) => {
      state.showFilter = !state.showFilter;
    },
    addInvoce: (state, action) => {
      const newInvoce = { ...action.payload, id: getRandoId(1000, 9999) };
      state.invoces.push(newInvoce);
    },
    addInvoceDraft: (state, action) => {
      const newDraft = {
        ...action.payload,
        status: "draft",
        id: getRandoId(1000, 9999),
      };

      state.invoces.push(newDraft);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  filterByStatus,
  removeFilter,
  showFilterToggle,
  addInvoce,
  addInvoceDraft,
} = invoceSlice.actions;

export default invoceSlice.reducer;

export const selectPostsByUser = createSelector(
  (state: RowInfo[]) => state,

  (state) => {
    const pending = state.filter((item: RowInfo) => item.status === "pending");
    return pending.length;
  }
);
