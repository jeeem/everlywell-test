import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import home from './modules/home';
import modal from './modules/modal';

export default combineReducers({
  home,
  modal,
  routing,
});
