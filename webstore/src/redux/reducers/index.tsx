import { combineReducers } from 'redux';
import { orderReducer } from '../order/orderReducer';
import { choiceReducer } from '../order/choiceReducer';
import { initReducer } from '../order/initReducer';
import { displayReducer } from '../display/displayReducer';
import { profileReducer } from '../profile/profileReducer';
import { paymentReducer } from '../payment/paymentReducer';
import { profileCompletionReducer } from '../profile/profileCompletionReducer';

export default combineReducers({
  orderReducer,
  choiceReducer,
  initReducer,
  displayReducer,
  profileReducer,
  paymentReducer,
  profileCompletionReducer
});
