import { combineReducers } from 'redux';
import { orderReducer } from '../order/reducers';
import { profileReducer } from '../profile/reducers';

export default combineReducers({
  orderReducer,
  profileReducer
})
