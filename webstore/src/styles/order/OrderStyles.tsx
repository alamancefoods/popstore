import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import OrderForm from '../../components/order/OrderForm';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as PlusIcon } from '../../static/plusSign.svg';
import { ReactComponent as MinusIcon } from '../../static/minusSign.svg';
import { FlavorDeleteButton } from '../../components/order/FlavorDeleteBtn';

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
  "pineapple cherry lemonLime guava mojito"
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
  background: rgba(211, 234, 242, 0.85);
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
"alert alert alert"
"submission selection plus"
"submission selection input"
"submission name minus"
`;

const landscapeEntryGrid = `
  "selection selection selection"
  "name name name"
  "alert alert alert"
  "minus input plus"
  "submission submission submission"
`;

const portraitEntryRowDimensions = `
auto auto auto auto
`;

const landscapeEntryRowDimensions = `
auto auto auto auto 
`;


// The following containers should exist within the
// StyledEntryContainer
// 

export const StyledPopForm = styled(Form)`
  display: grid;
  z-index: 1;
  grid-area: ${props => props.theme.isPortrait ? portraitEntryGridArea : landscapeEntryGridArea};
  grid-template-rows: ${props => props.theme.isPortrait ?
    `auto repeat(3, ${props.theme.windowHeight / 15}px)` :
    `${props.theme.windowHeight * 0.2}px
 ${props.theme.windowHeight * 0.05}px auto
     repeat(2, ${props.theme.windowHeight * 0.2}px)`};
  grid-template-columns: ${props => props.theme.isPortrait ?
    `repeat(3, ${props.theme.windowWidth / 3}px)` :
    `repeat(3, ${props.theme.windowWidth / 15}px)`
  };
  grid-template-areas: ${props => props.theme.isPortrait ? portraitEntryGrid : landscapeEntryGrid};
  align-items: start;
  align-content: start;
`;

export const StyledFlavorIcon = styled(({ component, ...props }) => React.cloneElement(component, props))`
  display: flex;
  z-index: auto;
  grid-area: ${props => props.theme.gridArea};
  justify-self: center;
  align-self: center;
  filter: drop-shadow(5px 5px 2px #757575);
`;

export const StyledFlavorChoice = styled(({ component, ...props }) => React.cloneElement(component, props))`
  display: flex;
  z-index: auto;
  grid-area: ${props => props.theme.gridArea};
  justify-self: center;
  align-self: end;
`;

export const AnimatedFlavorIcon = animated(StyledFlavorIcon);

export const StyledFlavorName = styled.h4`
font-size: 3vh;
grid-area: name;
justify-self: center;
align-self: center;
`;

export const StyledPlusIcon = styled(PlusIcon)`
grid-area: plus;
justify-self: center;
align-self: center;
`;

export const StyledMinusIcon = styled(MinusIcon)`
grid-area: minus;
justify-self: center;
align-self: center;
`;

export const StyledPopField = styled(Field)`
  grid-area: input; 
  display: flex;
  height: ${props => props.theme.windowHeight * 0.05}px;
  width: ${props => props.theme.windowHeight * 0.05}px;
  border: 2px solid red;
  border-radius: ${props => props.theme.windowHeight * 0.05}px;
  text-align: center;
  justify-self: center;
  align-self: center;
`;

export const ValueSubmissionContainer = styled.div`
grid-area: submission;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`;

export const SelectionInfoContainer = styled.div`
grid-area: selection;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export const AlertContainer = styled.div`
grid-area: alert;
`;




export const StyledFlavorSubmitButton = styled.button`
  display: table;
  font-size: 3vh;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: ${props => props.theme.windowHeight * 0.05}px;
`;

export const StyledFlavorDeleteButton = styled(FlavorDeleteButton)`
  display: table;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

export const StyledStatusContainer = styled.div`
  display: flex;
  grid-area: secondRowBreak / firstColBreak / bottom / secondColBreak;
  flex-direction: row;
  justify-content: space-around;
`;



export default StyledOrderForm;

