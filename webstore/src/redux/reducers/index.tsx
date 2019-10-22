import { combineReducers } from 'redux';
import { orderReducer } from '../order/orderReducer';
import { choiceReducer } from '../order/choiceReducer';
import { initReducer } from '../order/initReducer';
import { displayReducer } from '../display/displayReducer';
import { locationReducer } from '../location/locationReducer';
import { profileReducer } from '../profile/profileReducer';
import { profileCompletionReducer } from '../profile/profileCompletionReducer';

export default combineReducers({
  orderReducer,
  choiceReducer,
  initReducer,
  displayReducer,
  locationReducer,
  profileReducer,
  profileCompletionReducer
});
