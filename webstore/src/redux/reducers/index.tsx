import { combineReducers } from 'redux';
import { orderReducer } from '../order/orderReducer';
import { choiceReducer } from '../order/choiceReducer';

export default combineReducers({
  orderReducer,
  choiceReducer
});
