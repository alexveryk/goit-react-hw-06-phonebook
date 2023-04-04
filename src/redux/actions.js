import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
// export const addContact = values => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     },
//   };
// };
// export const deleteContact = numberId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: numberId,
//   };
// };

// export const setFilter = value => {
//   return {
//     type: 'filters/setFilter',
//     payload: value,
//   };
// };

export const addContact = createAction('contacts/addContact', values => {
  return {
    payload: {
      id: nanoid(),
      name: values.name,
      number: values.number,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filters/setFilter');
