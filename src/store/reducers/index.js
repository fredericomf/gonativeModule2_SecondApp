import { combineReducers } from 'redux';

import loginReducer from './login';
import repositoriesReducer from './repositories';

export default combineReducers({
  loginReducer,
  repositoriesReducer,
});
