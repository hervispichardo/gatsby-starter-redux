import { combineReducers } from 'redux';
import app from './app';
import offices from './offices';

export default combineReducers({
  app,
  offices
});
