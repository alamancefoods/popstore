import { UPDATE_DISPLAY } from '../actionTypes';

export interface DisplayState {
  isPortrait: boolean;
  windowWidth: number;
  windowHeight: number;
};

interface UpdateDisplayAction {
  type: typeof UPDATE_DISPLAY;
  payload: DisplayState;
};

export type DisplayActionTypes = UpdateDisplayAction;

// handleEvent(evt: Event): void;
