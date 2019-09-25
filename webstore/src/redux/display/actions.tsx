import { UPDATE_DISPLAY } from '../actionTypes';
import { DisplayActionTypes } from './types';

export function updateDisplay(firstRender: boolean): DisplayActionTypes {
  let isPortrait = true;
  let aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio <= 13 / 9) {
    isPortrait = true;
  } else {
    isPortrait = false;
  };
  return {
    type: UPDATE_DISPLAY,
    payload: {
      display: {
        isPortrait: isPortrait,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        firstRender: firstRender
      }
    }
  };
};
