import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  composeFormOpen:false
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {
    openComposeForm: (state) => {
      state.composeFormOpen = true;
    },
    closeOpenForm: (state) => {
      state.closeOpenForm = false;
    }
  }
});

export const { openComposeForm, closeOpenForm} = mailSlice.actions;

export const selectComposeFormState = (state) => state.mail.composeFormOpen;



export default mailSlice.reducer;
