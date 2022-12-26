import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  type: "form",
};

interface ModalState {
  show: boolean;
  type: string;
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.show = !state.show;
    },
    changeType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { toggleModal, changeType } = modalSlice.actions;

export default modalSlice.reducer;

export const showModal = createSelector(
  (state: ModalState) => state,
  (state) => state.show
);
