import { UPDATE_DISPLAY, UPDATE_FOCUS } from '../actionTypes';
import { DisplayActionTypes, FocusActionTypes } from './types';

export function updateDisplay(firstRender: boolean, isFocused: boolean): DisplayActionTypes {
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
    },
    isFocused: isFocused
  };
};

export function updateFocus(isFocused: boolean): FocusActionTypes {
  return {
    type: UPDATE_FOCUS,
    payload: {
      focus: {
        isFocused: isFocused
      }
    }
  };
};
