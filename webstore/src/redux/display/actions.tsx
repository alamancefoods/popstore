import { UPDATE_DISPLAY } from '../actionTypes';
import { DisplayActionTypes } from './types';

/** Sends Display Data to Redux Store*/
export function updateDisplay(firstRender: boolean): DisplayActionTypes {
  let isPortrait = true;
  let aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio < 1024 / 768) {
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
