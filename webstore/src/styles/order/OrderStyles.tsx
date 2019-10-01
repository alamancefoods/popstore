import React from 'react';
import styled from 'styled-components';
import OrderForm from '../../components/order/OrderForm';
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
`;


const landscapeButtonGrid = `
  "strawberry orange bluePunch grape watermelon"
  "lemonLime cherry pineapple guava mojito"
  "papaya mango coconut greenApple banana"
`;

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
  z-index: auto;
  grid-area: ${props => props.theme.gridArea};
  filter: drop-shadow(4px 3px 1px #757575);
`;

export const StyledFlavorCountBox = styled.h5`
  display: flex; 
  z-index: 1;
  transform: translate(-50px, -20px);
  grid-area: ${props => props.theme.gridArea};
`;

export const StyledSVGEntry = styled.svg`
  position: absolute;
  display: flex;
  justify-content: left;
  justify-items: left;
  filter: drop-shadow(4px 3px 1px #757575);
`;

//Styles for Order Form Entry
const landscapeEntryGridArea = `
firstRowBreak / secondColBreak / bottom / stop
`;

const portraitEntryGridArea = `
secondRowBreak / start / bottom /stop
`;

const portraitEntryGrid = `
"submission selection valMod"
"alert alert alert"
`;

const landscapeEntryGrid = `
  "selection"
  "valMod"
  "submission"
  "alert"
`;

const portraitEntryRowDimensions = `
auto 10%
`;

const landscapeEntryRowDimensions = `
auto auto auto 10%
`;


// The following containers should exist within the
// StyledEntryContainer

export const StyledPopForm = styled(Form)`
  display: grid;
  z-index: 1;
  grid-area: ${props => props.theme.isPortrait ? portraitEntryGridArea : landscapeEntryGridArea}
  grid-template-rows: ${props => props.theme.isPortrait ?
    portraitEntryRowDimensions :
    `repeat(3, ${props.theme.windowHeight * 0.2}px) 1fr`};
  grid-template-columns: ${props => props.theme.isPortrait ?
    `repeat(3, ${props.theme.windowWidth / 3}px)` :
    'auto'
  };
  grid-template-areas: ${props => props.theme.isPortrait ? portraitEntryGrid : landscapeEntryGrid};
  align-items: center;
  justiy-items: center;
`;

export const ValueSubmissionContainer = styled.div`
grid-area: submission;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;

export const SelectionInfoContainer = styled.div`
grid-area: selection;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ValueModifierContainer = styled.div`
grid-area: valMod; 
display: flex;
flex-direction: ${props => props.theme.isPortrait ? 'column' : 'row'};
align-items: center;
justify-content: center;
`;

export const AlertContainer = styled.div`
grid-area: alert;
`;


export const StyledPopField = styled(Field)`
  display: flex;
  height: 30px;
  width: 30px;
  border: 2px solid red;
  border-radius: 30px;
  text-align: center;
`;

export const StyledPopFieldButton = styled.button`
  display: table;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const StyledStatusContainer = styled.div`
  display: flex;
  grid-area: secondRowBreak / firstColBreak / bottom / secondColBreak;
  flex-direction: row;
  justify-content: space-around;
`;



export default StyledOrderForm;

