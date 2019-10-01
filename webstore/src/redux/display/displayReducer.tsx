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
      /*The following if statement is the culmination of countless hours
       * (read: days. weeks!!!) spent trying to enable chrome mobile's
       * virtual keyboard to appear without wrecking the entire app's
       * styling. As a result, the style will only be modified in the
       * event of an orientation change.**/
      if (
        state.display.isPortrait === action.payload.display.isPortrait
        && action.payload.display.firstRender === false
      ) {
        return state;
      } else {
        return {
          ...state,
          display: {
            isPortrait: action.payload.display.isPortrait,
            windowWidth: action.payload.display.windowWidth,
            windowHeight: action.payload.display.windowHeight,
            firstRender: action.payload.display.firstRender
          }
        };
      };
    default:
      return state;
  };
};
