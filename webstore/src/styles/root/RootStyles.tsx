import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import { ReactComponent as CartIcon } from '../../static/cart.svg';
import { ThemeType } from '../../components/providers/QueryProvider';
import { ConditionalLink } from '../../components/main/Navigation';
import { SubmitAnim } from '../../components/main/SubmitAnim';


export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    html, body, #root {
      height: 100%;
      margin: 0;
      padding: 0;
      resize: none;
    }

    #root {
  display: grid;
  grid-template-columns:
  [start] 0px
  [firstColBreak] ${props => props.theme.isPortrait ? props.theme.windowWidth : props.theme.windowWidth * 0.7}px
  [secondColBreak] ${props => props.theme.isPortrait ? 0 : props.theme.windowWidth * 0.3}px
  [stop];
  grid-template-rows:
  [top] ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.15 : props.theme.windowHeight * 0.2}px
  [firstRowBreak] minmax(${props => props.theme.isPortrait ? props.theme.windowHeight * 0.4 : props.theme.windowHeight * 0.3}px, auto)
  [secondRowBreak] ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.2 : 0}px
  [bottom];
  height: ${props => props.theme.windowHeight}px;
  background: rgba(120, 210, 240, 0.75);
    }

    body {
      font-family: 'Carter One' cursive;
      background-color: #FFFFFF;
    }

    svg {
      overflow: visible;
    }

    textarea {
      resize: none
    }


input:: -webkit-outer-spin-button,
  input:: -webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type = number] {
  -moz-appearance: textfield;
}

// Quick fix. Needs to be addressed later for improved accessibility.
button::-moz-focus-inner {
  border: 0;
}


`;


export const HeaderPortraitGridArea = (
  "top / firstColBreak / firstRowBreak / secondColBreak"
);

export const HeaderLandscapeGridArea = (
  "top / firstColBreak /firstRowBreak / stop"
);

export const StyledHeader = styled.header`
  display: grid;
  grid-area: ${
  props => props.theme.isPortrait ?
    HeaderPortraitGridArea :
    HeaderLandscapeGridArea};
  grid-template-columns: ${props => props.theme.isPortrait ?
    "repeat(3, 1fr)" :
    "35% 35% 30%"};
  grid-template-rows: 1fr;
  grid-template-areas: "left center right"
`;


export const StyledLogo = styled(({ component, ...props }) =>
  React.cloneElement(component, props))`
    align-self: center;
    grid-area: ${props => props.theme.isPortrait && props.order > 0 ? 'left' : props.theme.isPortrait ? 'center' : 'left'};
    `;

export const StyledInfoBox = styled.aside`
    margin-top: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.theme.isPortrait ? 'center' : 'space-around'};
    flex-direction: ${props => props.theme.isOrder ? 'row' : 'column'};
    padding-right: ${props => props.theme.windowWidth * 0.05}px;
    padding-left: ${props => props.theme.windowWidth * 0.05}px;
    padding-top: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.02 : props.theme.windowHeight * 0.02}px;
    padding-bottom: ${props => props.theme.isPortrait ? 0 : props.theme.windowHeight * 0.02}px;
    align-items: center;
    grid-area: right;
    background: rgba(211, 234, 242, 1);
    border-top-right-radius: ${props => props.theme.windowWidth * 0.01}px;
    border-top-left-radius: ${props => props.theme.windowWidth * 0.01}px;
    border-bottom-right-radius: ${props => props.theme.isPortrait ? 0 : props.theme.windowWidth * 0.01}px;
    border-bottom-left-radius: ${props => props.theme.isPortrait ? 0 : props.theme.windowWidth * 0.01}px;
    filter: drop-shadow(0px 2px 2px #757575);
    `;

export const StyledBalance = styled.h4`
  font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.017 : props.theme.windowHeight * 0.03}px;
  font-family: 'Carter One', cursive;
`;

interface SubmitButtonProps {
  errors?: number;
};


const gridLayout = `
"left center right"
`;

export const ButtonContainer = styled.div`
grid-area: submit;
display: grid;
justify-content: center;
align-content: center;
grid-template-areas: ${gridLayout};
justify-content: center;
align-items: center;
`;

export const SubmitButton = styled.button<SubmitButtonProps>`
grid-area: center;
align-self: center;
justify-self: center;
color: ${props => props.errors != undefined && props.errors > 0 ? 'grey' : 'rgb(110, 110, 224)'};
background-color: rgba(211,234,243,0);
border: 0px;
filter: drop-shadow(1px 1px 1px #757575);
height: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.05 : props.theme.windowHeight * 0.07}px;
font-family: 'Lalezar', cursive;
font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.03 : props.theme.windowHeight * 0.05}px;
border-radius: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.03 : props.theme.windowHeight * 0.005}px;
z-index: 1;
`;

export const StyledPanel = styled(SubmitAnim)`
grid-area: center;
align-self: center;
justify-self: center;
filter: drop-shadow(7px -7px 0px rgb(110, 110, 224));
z-index: 0;
`;

export const PaymentPanelSpring = styled(Spring)`
grid-area: center;
align-self: center;
justify-self: center;
filter: drop-shadow(7px -7px 0px rgb(110, 110, 224));
z-index: 0;
`;


export const StyledCartIcon = styled(CartIcon)`
 cursor: pointer;
`;

export const StyledNav = styled.nav`
  cursor: pointer;
  font-size: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.02 : props.theme.windowWidth * 0.013}px;
  font-family: 'Carter One', cursive;
`;

const alertPortraitGridArea = `secondRowBreak / firstColGreak / bottom / secondColBreak`;
const alertLandscapeGridArea = 'firstRowBreak / secondColBreak / secondRowBreak / stop';

export const StyledUserAlertContainer = styled.aside`
    grid-area: ${ props => props.theme.isPortrait ? alertPortraitGridArea : alertLandscapeGridArea};
    display: flex;
    justify-content: center;
    align-items: center;
    `;


