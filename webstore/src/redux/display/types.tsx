import { UPDATE_DISPLAY, UPDATE_FOCUS } from '../actionTypes';

export interface DisplayState {
  display: {
    isPortrait: boolean;
    windowWidth: number;
    windowHeight: number;
    firstRender: boolean;
  };
};

export interface FocusState {
  focus: {
    isFocused: boolean;
  };
};

interface UpdateDisplayAction {
  type: typeof UPDATE_DISPLAY;
  payload: DisplayState;
  isFocused: boolean;
};

interface UpdateFocusAction {
  type: typeof UPDATE_FOCUS;
  payload: FocusState;
};

export type DisplayActionTypes = UpdateDisplayAction;
export type FocusActionTypes = UpdateFocusAction;
