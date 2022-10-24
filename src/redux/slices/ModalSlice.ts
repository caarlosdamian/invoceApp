import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
 show: false,
};

interface ModalState {
 show: boolean;
}

export const modalSlice = createSlice({
 name: "modal",
 initialState,
 reducers: {
  toggleModal: (state) => {
   state.show = !state.show;
  },
 },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;

export const showModal = createSelector(
 (state: ModalState) => state,
 (state) => state.show
);
