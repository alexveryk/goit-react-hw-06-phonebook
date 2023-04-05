import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '0', name: 'Olexandr Veryk', number: '0967875486' },
  { id: '1', name: 'Svitlana Veryk', number: '0679956012' },
  { id: '2', name: 'Futey Victoria', number: '0975608621' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    prepare(values) {
      return {
        payload: {
          id: nanoid(),
          name: values.name,
          number: values.number,
        },
      };
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
