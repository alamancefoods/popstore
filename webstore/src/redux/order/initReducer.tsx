import { InitState, InitActionTypes } from './types';
import { UPDATE_INIT } from '../actionTypes';
import { INIT_DEFAULT } from '../stateDefaults';

const initialState: InitState = INIT_DEFAULT;

export function initReducer(
  state = initialState,
  action: InitActionTypes
): InitState {
  switch (action.type) {
    case UPDATE_INIT:
      return { ...state, init: action.payload.init };
    default:
      return state;
  }
};
