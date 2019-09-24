import { ChoiceState, ChoiceActionTypes } from './types';
import { UPDATE_CHOICE } from '../actionTypes';
import { CHOICE_DEFAULT } from '../stateDefaults';


const initialState: ChoiceState = CHOICE_DEFAULT;

export function choiceReducer(
  state = initialState,
  action: ChoiceActionTypes
): ChoiceState {
  switch (action.type) {
    case UPDATE_CHOICE:
      return { ...state, choice: action.payload.choice };
    default:
      return state;
  }
};
