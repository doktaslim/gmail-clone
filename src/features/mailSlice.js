import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null,
    mailToDelete: ''
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    },
    deleteMail: (state, action) => {
      state.mailToDelete = action.payload
    }
  },
});

export const { openSendMessage, closeSendMessage, selectMail, deleteMail } = mailSlice.actions;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;
export const selectOpenMail = state => state.mail.selectedMail;
export const selectMailToDelete = state => state.mail.mailToDelete;

export default mailSlice.reducer;
