import { UPDATE_PROFILE, COMPLETE_PROFILE } from '../actionTypes';

export interface ProfileState {
  profile: {
    email: string;
    name: string;
    city: string;
    country: string;
    state: string;
    addressLineOne: string;
    addressLineTwo: string;
    postalCode: string;
  };
};

export interface ProfilePayloadProps {
  email: string;
  name: string;
  city: string;
  country: string;
  state: string;
  addressLineOne: string;
  addressLineTwo: string;
  postalCode: string;
};

interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  payload: ProfilePayloadProps;
};


export interface ProfileCompletionState {
  isComplete: boolean;
};

interface UpdateProfileCompletionAction {
  type: typeof COMPLETE_PROFILE;
  payload: ProfileCompletionState;
}

export type ProfileActionTypes = UpdateProfileAction | UpdateProfileCompletionAction;



