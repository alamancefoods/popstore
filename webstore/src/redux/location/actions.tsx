import { UPDATE_LOCATION } from '../actionTypes';
import { LocationActionTypes } from './types';

export function updateLocation(location: string): LocationActionTypes {
  return {
    type: UPDATE_LOCATION,
    payload: {
      location: location
    }
  };
};

