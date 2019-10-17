import React from 'react';
import styled from 'styled-components';
import { interpolate, animated } from 'react-spring';
import OrderForm from '../../components/order/OrderForm';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as PlusIcon } from '../../static/plusSign.svg';
import { ReactComponent as MinusIcon } from '../../static/minusSign.svg';
import OrderButton from '../../components/order/OrderButton';

import { ScaleAttrs, ScaleProps } from './types';

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
  border-top-right-radius: ${props => props.theme.isPortrait ? '0%' : '10% 15%'}; 
`;



export const StyledFlavorCountBox = styled.span`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  border-radius: ${props => props.theme.countFontSize}px;
  align-items: center;
  height: ${props => props.theme.countFontSize * 2}px;
  width: ${props => props.theme.countFontSize * 2}px;
  z-index: 2;
  background-color: rgba(250, 167, 227);
  transform: translate(-${props => props.theme.offsetX}px, ${props => props.theme.offsetY * 1.2}px);
  grid-area: ${props => props.theme.gridArea};
  //filter: drop-shadow(-2px -2px 2px rgba(250, 167, 227));
`;

export const StyledCountText = styled.sup`
  font-size: ${props => props.theme.countFontSize}px;
  font-family: 'Carter One', cursive;
`;

export const StyledBackgroundCircle = styled.span`
  border-radius: ${props => props.theme.countFontSize * 2}px;
  align-items: center;
  height: ${props => props.theme.countFontSize * 4}px;
  width: ${props => props.theme.countFontSize * 4}px;
  z-index: 0;
  background-color: rgba(255, 234, 112, 0.5);
  transform: translate(-${props => props.theme.offsetX}px, ${props => props.theme.offsetY}px);
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
  z-index: 0;
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
  align-items: ${props => props.theme.isPortrait ? 'center' : 'start'};
  align-content: start;
`;


export const ScalingDiv = styled(animated.div).attrs<ScaleAttrs>(({ s }) => ({
  style: {
    // @ts-ignore
    transform: s.interpolate(s => `scale(${s})`),
    // @ts-ignore
    opacity: s.interpolate(s => `${s}`),
  }
}))`
   grid-area: ${props => props.theme.gridArea};
   height: 50px;
`;

export const StyledFlavorIcon = styled(({ component, ...props }) => React.cloneElement(component, props))`
  grid-area: ${props => props.theme.gridArea};
  display: flex;
  z-index: 1;
  justify-self: center;
  align-self: center;
  filter: drop-shadow(5px 5px 2px #757575);
`;


//const AnimatedFlavorIcon = styled(StyledFlavorIcon).attrs(({ s }) => ({
// style: {
// @ts-ignore
//   transform: s.interpolate(s => `scale(${s})`),
// }
//}))``;


export const StyledFlavorChoice = styled(({ component, ...props }) => React.cloneElement(component, props))`
  display: flex;
  z-index: 1;
  grid-area: ${props => props.theme.gridArea};
  justify-self: center;
  align-self: end;
`;


export const StyledFlavorName = styled.h4`
font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.03 : props.theme.windowHeight * 0.05}px;
font-family: 'Baloo Bhaina', cursive;
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
  height: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.05 : props.theme.windowHeight * 0.08}px;
  width: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.05 : props.theme.windowHeight * 0.08}px;
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
justify-content: space-between;
flex-grow: 1;
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
  font-size: ${props => props.theme.isPortrait ? '3vh' : '4vh'};
  border: 2px solid rgb(56, 184, 50);
  border-radius: ${props => props.theme.windowHeight * 0.05}px;
`;

export const StyledFlavorDeleteButton = styled.button`
  display: table;
  font-size: ${props => props.theme.isPortrait ? '3vh' : '4vh'};
  margin: ${props => props.theme.windowHeight * 0.02}px;
  border: 2px solid rgb(255, 23, 73);
  border-radius: ${props => props.theme.windowHeight * 0.05}px;
`;

export const StyledStatusContainer = styled.div`
  display: flex;
  grid-area: secondRowBreak / firstColBreak / bottom / secondColBreak;
  flex-direction: row;
  justify-content: space-around;
`;



export default StyledOrderForm;

