import { combineReducers } from 'redux';
import { orderReducer } from '../order/orderReducer';
import { choiceReducer } from '../order/choiceReducer';
import { initReducer } from '../order/initReducer';
import { displayReducer } from '../display/displayReducer';

export default combineReducers({
  orderReducer,
  choiceReducer,
  initReducer,
  displayReducer
});
