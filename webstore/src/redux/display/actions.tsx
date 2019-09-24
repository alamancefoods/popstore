import { UPDATE_DISPLAY } from '../actionTypes';
import { DisplayActionTypes } from './types';

export function updateDisplay(event?: any): DisplayActionTypes {
  let isPortrait = true;
  let aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio > 1024 / 768) {
    isPortrait = false;
  } else {
    isPortrait = true;
  }
  return {
    type: UPDATE_DISPLAY,
    payload: {
      isPortrait: isPortrait,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  };
};
