import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ORDER_ROUTE } from '../../constants/constants';
import { StyledOrderPrompt } from '../../styles/order/OrderStyles';
import { MenuPanelSpring } from '../../springs/MenuPanelSpring';
import {
  SubmitButton,
  ButtonContainer,
  StyledPanel
} from '../../styles/root/RootStyles';

export const Prompt = () => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const order = useSelector((state: any) => state.orderReducer.order);
  const totalCount = order.totalCount;
  const location = useLocation();
  const panelSpring = MenuPanelSpring();
  let fontSize = 0;

  switch (location.pathname) {
    case ORDER_ROUTE:
      if (totalCount === 0) {
        return <StyledOrderPrompt>Choose a fruit to picke a flavor!</StyledOrderPrompt>;
      } else if (totalCount >= 0 && totalCount < 5) {
        return <StyledOrderPrompt>Choose a minimum of five pops to qualify order.</StyledOrderPrompt>;
      } else {
        return (
          <ButtonContainer>
            <SubmitButton type="submit">Checkout</SubmitButton>
            <StyledPanel panelSpring={panelSpring} />
          </ButtonContainer>
        );
      }
    default:
      return <StyledOrderPrompt>The pops are behaving strangly</StyledOrderPrompt>;

  };
};
