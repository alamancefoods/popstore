import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import OrderForm from '../../components/order/OrderForm';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as PlusIcon } from '../../static/plusSign.svg';
import { ReactComponent as MinusIcon } from '../../static/minusSign.svg';
import { Prompt } from '../../components/order/Prompt';

import { ScaleAttrs } from './types';


const portraitOrderGrid = `
"order order order"
"blank submit oblank"
`;

const landscapeOrderGrid = `
"order order blank"
"order order submit"
"order order oblank"
`;

export const StyledOrderForm = styled.div`
display: grid;
grid-area: firstRowBreak / firstColBreak / bottom / stop;
width: 100%;
height: 100%;
position: relative;
justify-items: center;
justify-content: center;
grid-template-columns: ${props => props.theme.isPortrait ? "repeat(3, 33%)" : "35% 35% 30%"};
grid-template-rows: ${props => props.theme.isPortrait ? "76.5% 23.5%" : "33% 33% 33%"};
grid-template-areas: ${props => props.theme.isPortrait ? portraitOrderGrid : landscapeOrderGrid};
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


export const StyledButtonContainer = styled.main`
  grid-area: order;
  display: grid;
  height: 100%;
  width: 100%;
  position: relative;
  justify-items: center;
  justify-content: center;
  grid-template-columns: ${props => props.theme.isPortrait ? "33% 33% 33%" : "20% 20% 20% 20% 20%"};
  grid-template-rows: auto;
  grid-template-areas: ${props => props.theme.isPortrait ? portraitButtonGrid : landscapeButtonGrid};
  background: rgba(211, 234, 242, 1);
  border-top-right-radius: ${props => props.theme.isPortrait ? '0%' : '10% 15%'}; 
  filter: drop-shadow(0px 2px 2px #757575);
`;

const SingleButtonGrid = `
"tl tm tr"
"ml mm mr"
"bl bm br"
`;

interface ExampleProps {
  mod: any;
};


export const StyledSingleButtonContainer =
  styled(animated.div).attrs<ExampleProps>(({ mod }) => ({
    style: {
      opacity: mod.interpolate((mod: any) => mod),
      transform: mod.interpolate((mod: any) => `scale(${mod})`)
    }
  })) <ExampleProps>`
  grid-area: ${props => props.theme.gridArea};
  justify-content: center;
  align-items: center;
  display: grid;
  width: 100%;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: repeat(3, 33%);
  grid-template-areas: ${SingleButtonGrid};
`;



export const StyledFlavorCountBox = styled.span`
  display: flex; 
  position: absolute;
  grid-area: ml;
  flex-direction: column;
  justify-self: end;
  align-self: start;
  justify-content: center;
  border-radius: ${props => props.theme.countFontSize}px;
  align-items: center;
  height: ${props => props.theme.countFontSize * 2}px;
  width: ${props => props.theme.countFontSize * 2}px;
  z-index: 2;
  transform: translateX(-25px);
  background-color: rgba(250, 167, 227);
  right: ${function(props) {
    let baseVal = 1;
    if (props.theme.isPortrait) {
      baseVal = props.theme.windowWidth * -0.05;
      return baseVal;
    } else {
      if (props.theme.windowWidth > 900) {
        baseVal = props.theme.windowWidth * -0.01;
      } else {
        baseVal = props.theme.windowWidth * -0.03;
      }
      return baseVal;
    }
  }}px;
  //filter: drop-shadow(-2px -2px 2px rgba(250, 167, 227));
`;

export const StyledCountText = styled.sup`
  font-size: ${props => props.theme.countFontSize}px;
  font-family: 'Carter One', cursive;
`;

export const StyledBackgroundCircle = styled.span`
  display: flex;
  grid-area: mm;
  justify-self: end;
  align-self: start;
  border-radius: ${props => props.theme.countFontSize * 2}px;
  align-items: center;
  height: ${props => props.theme.countFontSize * 4}px;
  width: ${props => props.theme.countFontSize * 4}px;
  z-index: 0;
  background-color: rgba(255, 234, 112, 0.5);
`;

export const StyledSVGEntry = styled.svg`
  position: absolute;
  grid-area: tmm;
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

// The following containers should exist within the
// StyledEntryContainer
// 

export const StyledPopForm = styled(Form)`
  grid-area: submit;
  display: grid;
  z-index: 0;
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
  align-content: center;
  justify-content: center;
`;


export const ScalingDiv = styled(animated.button).attrs<ScaleAttrs>(({ s }) => ({
  style: {
  }
}))`
   grid-area: ${props => props.theme.gridArea};
   height: 50px;
   border: none;
   background: none;
   cursor: pointer;
   outline: none;
`;

export const StyledFlavorIcon = styled(({ component, ...props }) => React.cloneElement(component, props))`
  grid-area: mm;
  display: flex;
  z-index: 1;
  justify-self: center;
  align-self: center;
  filter: drop-shadow(5px 5px 2px #757575);
  cursor: pointer;
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
font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.03 : props.theme.windowHeight * 0.03}px;
font-family: 'Baloo Bhaina', cursive;
grid-area: name;
justify-self: center;
align-self: center;
`;

interface PlusIconProps {
  xPlus: any;
}

export const StyledPlusIcon = styled(animated(PlusIcon)).attrs<PlusIconProps>(({ xPlus }) => ({
  style: {
    transform: xPlus
      .interpolate({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [1, 0.97, 0.9, 1.1, 1.5, 1.1, 1.03, 1]
      })
      .interpolate((xPlus: any) => `scale(${xPlus})`)
  }
})) <PlusIconProps>`
grid-area: plus;
justify-self: center;
align-self: center;
`;

interface MinIconProps {
  xMin: any;
  firstRender: any;
}

export const StyledMinusIcon = styled(animated(MinusIcon)).attrs<MinIconProps>(({ xMin, firstRender }) => ({
  style: {
    transform: xMin
      .interpolate({
        from: 1,
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: firstRender ? [1, 1.03, 1.1, 0.9, 0.5, 0.9, 0.97, 1] : [1, 0.97, 0.9, 1.1, 1.5, 1.1, 1.03, 1]
      })
      .interpolate((xMin: any) => `scale(${xMin})`)
  }
})) <MinIconProps>`
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


export const StyledOrderPrompt = styled.h3`
  grid-area: submit;
  font-family: 'Lalezar', cursive;
  font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.03 : props.theme.windowHeight * 0.03}px;
  justify-self: center;
  align-self: center;
`;

