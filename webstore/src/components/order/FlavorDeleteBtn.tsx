import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateChoice, updateOrder } from '../../redux/order/actions';
import { NO_CHOICE } from '../../constants/constants';

export const FlavorDeleteButton = () => {
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(updateOrder(choice, 0));
    dispatch(updateChoice(NO_CHOICE));
  }

  return (
    <button onClick={() => removeItem()}>
      Delete Pop
    </button>
  );
};

