import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinedReducers from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

// SAGA ELECTOTRON IS NOT WORKING - START
// const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
// const sagaMiddleware = createSagaMiddleware({sagaMonitor});
// SAGA ELECTOTRON IS NOT WORKING - END

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(combinedReducers, composer);

sagaMiddleware.run(rootSaga);

export default store;

// BELLOW IS THE FIRST IMPLEMENTATION

// import { createStore } from 'redux';

// import Reactotron from 'reactotron-react-native';

// import combinedReducers from './reducers';

// // STUDY BLOCK
// // /**
// //  * STUDY_NOTE:
// //  * This block was commented when the reducers folder was created.
// //  */
// // // const INITIAL_STATE = [
// // //   { id: 1, text: 'Make coffee', completed: false },
// // //   { id: 2, text: 'Study React Native', completed: true },
// // //   { id: 3, text: 'Understand Redux', completed: false },
// // // ];
// // // function reducer(state = INITIAL_STATE, action) {
// // //   switch (action.type) {
// // //     case 'ADD_TODO':
// // //       return [
// // //         ...state,
// // //         {
// // //           id: Math.random(),
// // //           text: action.payload.text,
// // //           completed: false,
// // //         },
// // //       ];
// // //     case 'MARK_AS_COMPLETED':
// // //       return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
// // //     default:
// // //       return state;
// // //   }
// // // }
// // //
// // // const store = createStore(reducer);

// // // It's not working, i'll search for a solution to this.
// // // const createAppropriateStore = __DEV__ ? console.tron : createStore;
// // END OF STUDY BLOCK

// const createAppropriateStore = createStore;

// const store = createAppropriateStore(combinedReducers);

// console.tron.log(store.getState());

// export default store;
