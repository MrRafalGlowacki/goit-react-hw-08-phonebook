import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalShown: false,
  openedContact: {
    id: '',
    name: '',
    number: '',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    updateModalState: state => {
      state.isModalShown = !state.isModalShown;
    },

    setOpenedContact: (state, action) => {
      state.openedContact = action.payload;
    },
    editOpenedContact: (state, action) => {
      const { name, value } = action.payload;
      state.openedContact[name] = value;
    },
    resetOpenedContact: state => {
      state.openedContact = null;
    },
  },
});

export const { updateModalState, setOpenedContact,editOpenedContact, resetOpenedContact } =
  modalSlice.actions;

export const modalReducer = modalSlice.reducer;
