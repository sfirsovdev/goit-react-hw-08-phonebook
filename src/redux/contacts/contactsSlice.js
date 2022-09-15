import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', isLoading: false, error: null },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },

    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.isLoading = false;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
