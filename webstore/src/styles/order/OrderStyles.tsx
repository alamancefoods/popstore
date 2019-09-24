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
const portraitButtonGrid = `
  "strawberry orange bluePunch"
  "grape watermelon lemonLime"
  "cherry pineapple guava"
  "mojito papaya mango"
  "coconut greenApple banana"
`


const landscapeButtonGrid = `
  "strawberry orange bluePunch grape watermelon"
  "lemonLime cherry pineapple guava mojito"
  "papaya mango coconut greenApple banana"
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
  grid-template-areas: ${props => props.theme.isPortrait ? portraitButtonGrid : landscapeButtonGrid};
`;

export const StyledFlavorIcon = styled(({ component, ...props }) => React.cloneElement(component, props))`
  display: flex;
  grid-area: ${props => props.theme.gridArea};
  filter: drop-shadow(4px 3px 1px #757575);
`

export const StyledSVGEntry = styled.svg`
  position: absolute;
  display: flex;
  justify-content: left;
  justify-items: left;
  filter: drop-shadow(4px 3px 1px #757575);
`

//Styles for Order Form Entry
const landscapeEntryGridArea = `
firstRowBreak / secondColBreak / bottom / stop
`

const portraitEntryGridArea = `
secondRowBreak / start / bottom /stop
`

const portraitEntryGrid = `
"Picked-Pop Entry Entry"
"Picked-Pop Entry Entry"
"Error Error"
`

const landscapeEntryGrid = `
"Picked-Pop Picked-Pop"
"Entry Entry"
"Error Error"
`

export const StyledEntryContainer = styled.div`
  display: grid;
  grid-area: ${props => props.theme.isPortrait ? portraitEntryGridArea : landscapeEntryGridArea}
  grid-template-areas: ${props => props.theme.isPortrait ? portraitEntryGrid : landscapeEntryGrid}
`

export const StyledPopForm = styled(Form)`
  display: flex;
  flex-direction: ${props => props.theme.isPortrait ? 'row' : 'column'};
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

