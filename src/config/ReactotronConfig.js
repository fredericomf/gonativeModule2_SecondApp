import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

// import reactotronSaga from 'reactotron-redux-saga'; // SAGA REACTOTRON IS NOT WORKING

// STUDY_NOTES: '__DEV__' is an envirionment variable (only disponible on NATIVE)
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.30' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux()) // add the reactrotron-redux plugin

  // .use(reactotronSaga()) // SAGA REACTOTRON IS NOT WORKING

    .connect(); // let's connect!

  tron.clear();

  // STUDY_NOTES: The 'console' variable is global, then I can set values on it.
  console.tron = tron;
}
