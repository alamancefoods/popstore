import React from 'react'
import styled from 'styled-components';
import OrderForm from '../../components/order/OrderForm'
import { Form, Field, ErrorMessage } from 'formik';

const StyledOrderForm = styled(props => <OrderForm {...props} />)`
  display: flex;
  flex-direction: column;
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  justify-content: center;
  height: 100%;
`;


// Styles for Buttons.
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

export const StyledButtonContainer = styled.div`
  display: grid;
  grid-area: firstRowBreak / firstColBreak / secondRowBreak / secondColBreak;
  height: 100%;
  width: 100%;
  position: relative;
  justify-items: center;
  justify-content: center;
  grid-template-columns: ${props => props.theme.isPortrait ? "33% 33% 33%" : "20% 20% 20% 20% 20%"};
  grid-template-rows: auto;
  grid-template-areas: ${props => props.theme.isPortrait ? portraitButtonGrid : landscapeButtonGrid };
`;



export const StyledSVGButton = styled.svg`
  position: absolute;
  display: flex;
  justify-content: center;
  justify-items: center;
  grid-area: ${props => props.theme.gridArea};
  filter: drop-shadow(4px 3px 1px #757575);
`;


//Styles for Order Form Entry
const landscapeEntryGridArea =`
firstRowBreak / secondColBreak / bottom / stop
`

const portraitEntryGridArea =`
secondRowBreak / start / bottom /stop
`

const portraitEntryGrid=`
"Picked-Pop Entry Entry"
"Picked-Pop Entry Entry"
"Error Error"
`

const landscapeEntryGrid=`
"Picked-Pop Picked-Pop"
"Entry Entry"
"Error Error"
`

export const StyledEntryContainer = styled.div`
  display: grid;
  grid-area: ${props => props.theme.isPortrait ? portraitEntryGridArea : landscapeEntryGridArea }
  grid-template-areas: ${props => props.theme.isPortrait ? portraitEntryGrid : landscapeEntryGrid}
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

