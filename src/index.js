import '~/config/ReactotronConfig';
import React from 'react';

import { Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from '~/store';

import Routes from './routes';
import { setNavigator } from '~/services/navigation';

const App = () => (
  <Provider store={store}>
    {/* STUDY_NOTE: Here we're setting the Routes componente as a reference to navigation (see let variable in navigation.js) */}
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
