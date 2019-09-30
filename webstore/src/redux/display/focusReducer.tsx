import { UPDATE_FOCUS } from '../actionTypes';
import { FocusState, FocusActionTypes } from './types';
import { FOCUS_DEFAULT } from '../stateDefaults';


const initialState: FocusState = FOCUS_DEFAULT;


export function focusReducer(
  state = initialState,
  action: FocusActionTypes
): FocusState {
  switch (action.type) {
    case UPDATE_FOCUS:
      return {
        ...state,
        focus: {
          isFocused: action.payload.focus.isFocused
        }
      };
    default:
      return state;
  };
};

