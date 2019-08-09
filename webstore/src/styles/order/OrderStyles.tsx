import React from 'react'
import styled from 'styled-components';
import OrderForm from '../../components/order/OrderForm'
import { Form, Field, ErrorMessage } from 'formik';

const portraitGrid=`
  "Strawberry Orange Blue-Punch"
  "Grape Watermelon Lemon-Lime"
  "Cherry Pineapple Guava"
  "Mojito Papaya Mango"
  "Coconut Green-Apple Banana"
`

const landscapeGrid=`
  "Strawberry Orange Blue-Punch Grape Watermelon"
  "Lemon-Lime Cherry Pineapple Guava Mojito"
  "Papaya Mango Coconut Green-Apple Banana"
`
const StyledOrderForm = styled(props => <OrderForm {...props} />)`
  display: flex;
  flex-direction: column;
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  height: 100%;
`;


export const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.isPortrait ? "33% 33% 33%" : "20% 20% 20% 20% 20%"};
  grid-template-rows: auto;
  grid-template-areas: ${props => props.theme.isPortrait ? portraitGrid : landscapeGrid };
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
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
  height: ${props => props.theme.entryContainerHeight};
`

export const StyledPopForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledPopField = styled(Field)`
  display: flex;
  height: 30px;
  width: 30px;
  border: 2px solid red;
  border-radius: 30px;
  text-align: center;
`

export const StyledPopFieldButton = styled.button`
  display: table;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export const StyledStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export default StyledOrderForm;

