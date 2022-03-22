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
    closeComposeForm: (state) => {
      state.composeFormOpen = false;
    }
  }
});

export const { openComposeForm, closeComposeForm} = mailSlice.actions;

export const selectComposeFormState = (state) => state.mail.composeFormOpen;



export default mailSlice.reducer;
