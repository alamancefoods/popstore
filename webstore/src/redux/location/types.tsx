import { UPDATE_LOCATION } from '../actionTypes';

export interface LocationState {
  location: string;
};

interface UpdateLocationAction {
  type: typeof UPDATE_LOCATION;
  payload: LocationState;
};

export type LocationActionTypes = UpdateLocationAction;
