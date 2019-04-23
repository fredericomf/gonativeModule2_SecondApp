import { createStore } from 'redux';

import Reactotron from 'reactotron-react-native';

import combinedReducers from './reducers';

/**
 * STUDY_NOTE:
 * This block was commented when the reducers folder was created.
 */
// const INITIAL_STATE = [
//   { id: 1, text: 'Make coffee', completed: false },
//   { id: 2, text: 'Study React Native', completed: true },
//   { id: 3, text: 'Understand Redux', completed: false },
// ];
// function reducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: Math.random(),
//           text: action.payload.text,
//           completed: false,
//         },
//       ];
//     case 'MARK_AS_COMPLETED':
//       return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
//     default:
//       return state;
//   }
// }
//
// const store = createStore(reducer);

// It's not working, i'll search for a solution to this.
// const createAppropriateStore = __DEV__ ? console.tron : createStore;
const createAppropriateStore = createStore;

const store = createAppropriateStore(combinedReducers);

console.tron.log(store.getState());

export default store;
