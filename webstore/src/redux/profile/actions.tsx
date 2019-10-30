import { UPDATE_PROFILE, COMPLETE_PROFILE } from '../actionTypes';
import { ProfileActionTypes } from './types';

/**Sends Profile Data to Redux Store*/
export function updateProfile(
  email: string,
  name: string,
  city: string,
  country: string,
  state: string,
  addressLineOne: string,
  addressLineTwo: string,
  postalCode: string
): ProfileActionTypes {
  return {
    type: UPDATE_PROFILE,
    payload: {
      email: email,
      name: name,
      city: city,
      country: country,
      state: state,
      addressLineOne: addressLineOne,
      addressLineTwo: addressLineTwo,
      postalCode: postalCode
    }
  };
};

/**Saves a ProfileCompletion Boolean in State.*/
export function updateProfileComplete(
  isComplete: boolean
): ProfileActionTypes {
  return {
    type: COMPLETE_PROFILE,
    payload: {
      isComplete: isComplete
    }
  };
};
