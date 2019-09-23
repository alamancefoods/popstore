import { ChoiceState, ChoiceActionTypes } from './types';
import { UPDATE_CHOICE, NO_CHOICE } from '../../constants/constants';


const initialState: ChoiceState = {
  choice: NO_CHOICE
};

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
