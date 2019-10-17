import { LocationState, LocationActionTypes } from './types';
import { UPDATE_LOCATION } from '../actionTypes';
import { LOCATION_DEFAULT } from '../stateDefaults';

const initialState: LocationState = LOCATION_DEFAULT;

export function locationReducer(
  state = initialState,
  action: LocationActionTypes
): LocationState {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload.location
      };
    default:
      return state;
  };
};
