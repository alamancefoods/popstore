import React from 'react'
import styled from 'styled-components';
import OrderForm from '../../components/order/OrderForm'
import { Form, Field, ErrorMessage } from 'formik';

const StyledOrderForm = styled(props => <OrderForm {...props} />)`
  display: flex;
  flex-direction: column;
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
`;


export const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: auto;
  grid-template-areas:
    "Grape Orange Blue-Punch Lemon-Lime Pina-Colada"
    "Banana Peach Cherry Mango Green-Apple"
    "Watermelon Strawberry Guava Mojito Papaya";
`;

export const StyledOrderButton = styled.button`
  display: table;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.color};
  border-radius: 30px;
  grid-area: ${props => props.theme.gridArea}
`;

export const StyledEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledPopForm = styled(Form)`
  display: flex;
  flex-direction: row;
`

export const StyledPopField = styled(Field)`
  display: table;
`

export const StyledPopFieldButton = styled.button`
  display: table;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default StyledOrderForm;

