import React from 'react'
import styled from 'styled-components';
import OrderForm from '../../components/order/OrderForm'
import { Form, Field, ErrorMessage } from 'formik';

const landscapeEntryGridArea =`
firstRowBreak / secondColBreak / bottom / stop
`

const portraitEntryGridArea =`
secondRowBreak / start / bottom /stop
`

const portraitEntryGrid=`
"Alert Picked-Pop Entry"
"Balance Submit Checkout"
`

const landscapeEntryGrid=`
"Balance Alert"
"Picked-Pop Entry"
`

const portraitButtonGrid =`
  "Strawberry Orange Blue-Punch"
  "Grape Watermelon Lemon-Lime"
  "Cherry Pineapple Guava"
  "Mojito Papaya Mango"
  "Coconut Green-Apple Banana"
` 


const landscapeButtonGrid =`
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
  grid-area: firstRowBreak / firstColBreak / secondRowBreak / secondColBreak;
  height: 100%;
  width: 100%;
  position: relative;
  grid-template-columns: ${props => props.theme.isPortrait ? "33% 33% 33%" : "20% 20% 20% 20% 20%"};
  grid-template-rows: auto;
  grid-template-areas: ${props => props.theme.isPortrait ? portraitButtonGrid : landscapeButtonGrid };
`;



export const StyledSVGButton = styled.svg`
  position: absolute;
  height: auto;
  display: table;
  overflow: visible;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 30px;
  grid-area: ${props => props.theme.gridArea};
  filter: drop-shadow(4px 3px 1px #757575);
`;


export const StyledEntryContainer = styled.div`
display: flex;
grid-area: ${props => props.theme.isPortrait ? portraitEntryGridArea : landscapeEntryGridArea }
flex-direction: column;
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
  grid-area: secondRowBreak / firstColBreak / bottom / secondColBreak;
  flex-direction: row;
  justify-content: space-around;
`

export default StyledOrderForm;

