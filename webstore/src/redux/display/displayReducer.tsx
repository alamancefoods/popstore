import { DisplayState, DisplayActionTypes } from './types';
import { UPDATE_DISPLAY } from '../actionTypes';
import { DISPLAY_DEFAULT } from '../stateDefaults';


const initialState: DisplayState = DISPLAY_DEFAULT;

export function displayReducer(
  state = initialState,
  action: DisplayActionTypes
): DisplayState {
  switch (action.type) {
    case UPDATE_DISPLAY:
      return {
        ...state,
        isPortrait: action.payload.isPortrait,
        windowWidth: action.payload.windowWidth,
        windowHeight: action.payload.windowHeight
      };
    default:
      return state;
  };
};
