import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ReactComponent as CartIcon } from '../../static/cart.svg';
import { ThemeType } from '../../components/providers/QueryProvider';


export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    html, body, #root {
      height: 100 %;
      margin: 0;
      padding: 0;
      resize: none;
    }

    #root {
  display: grid;
  grid-template-columns:
  [start] 0px
  [firstColBreak] auto
  [secondColBreak] ${props => props.theme.isPortrait ? 0 : props.theme.windowWidth * 0.2}px
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
  grid-template-columns: repeat(3, 1fr);
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
    justify-self: right;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    grid-area: right;
    `;

export const StyledBalance = styled.h4`
  font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.02 : props.theme.windowHeight * 0.03}px;
  font-family: 'Carter One', cursive;
`;

export const StyledCartIcon = styled(CartIcon)`
`;

const alertPortraitGridArea = `secondRowBreak / firstColGreak / bottom / secondColBreak`;
const alertLandscapeGridArea = 'firstRowBreak / secondColBreak / secondRowBreak / stop';

export const StyledUserAlertContainer = styled.aside`
    grid-area: ${ props => props.theme.isPortrait ? alertPortraitGridArea : alertLandscapeGridArea};
    display: flex;
    justify-content: center;
    align-items: center;
    `;


