import { addContact, deleteContact, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '0', name: 'Olexandr Veryk', number: '0967875486' },
  { id: '1', name: 'Svitlana Veryk', number: '0679956012' },
  { id: '2', name: 'Futey Victoria', number: '0975608621' },
];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filtersInitialState = {
  filters: '',
};

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setFilter.type:
//       return {
//         filters: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const filtersReducer = createReducer(filtersInitialState, {
  [setFilter]: (state, action) => {
    return {
      filters: action.payload,
    };
  },
});
