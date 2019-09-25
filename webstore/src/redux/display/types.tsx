import { UPDATE_DISPLAY } from '../actionTypes';

export interface DisplayState {
  display: {
    isPortrait: boolean;
    windowWidth: number;
    windowHeight: number;
    firstRender: boolean;
  };
};

interface UpdateDisplayAction {
  type: typeof UPDATE_DISPLAY;
  payload: DisplayState;
};

export type DisplayActionTypes = UpdateDisplayAction;
