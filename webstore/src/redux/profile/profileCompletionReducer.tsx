import { ProfileCompletionState, ProfileActionTypes } from './types';
import { COMPLETE_PROFILE } from '../actionTypes';
import { PROFILE_COMPLETION_DEFAULT } from '../stateDefaults';

const initialState: ProfileCompletionState = PROFILE_COMPLETION_DEFAULT;


export function profileCompletionReducer(
  state = initialState,
  action: ProfileActionTypes
): ProfileCompletionState {
  switch (action.type) {
    case COMPLETE_PROFILE:
      return {
        ...state,
        isComplete: action.payload.isComplete
      };
    default:
      return state;
  };
};
