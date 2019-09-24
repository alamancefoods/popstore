import { combineReducers } from 'redux';
import { orderReducer } from '../order/orderReducer';
import { choiceReducer } from '../order/choiceReducer';
import { displayReducer } from '../display/displayReducer';

export default combineReducers({
  orderReducer,
  choiceReducer,
  displayReducer
});
