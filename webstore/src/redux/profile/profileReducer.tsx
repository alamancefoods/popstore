import { ProfileState, ProfileActionTypes } from './types';
import { UPDATE_PROFILE } from '../actionTypes';
import { PROFILE_DEFAULT } from '../stateDefaults';

const initialState: ProfileState = PROFILE_DEFAULT;

export function profileReducer(
  state = initialState,
  action: ProfileActionTypes
): ProfileState {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        profile: {
          ...state.profile,
          email: action.payload.email,
          name: action.payload.name,
          city: action.payload.city,
          country: action.payload.country,
          state: action.payload.state,
          addressLineOne: action.payload.addressLineOne,
          addressLineTwo: action.payload.addressLineTwo,
          postalCode: action.payload.postalCode
        }
      };
    default:
      return state;
  };
};
