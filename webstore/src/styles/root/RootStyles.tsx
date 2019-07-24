import styled, { createGlobalStyle } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns:
  [start] ${props => props.theme.leftCol}
  [firstColBreak] ${props => props.theme.mainCol}
  [secondColBreak] ${props => props.theme.rightCol}
  [stop];
  grid-template-rows:
  [top] ${props => props.theme.topRow}
  [firstRowBreak] ${props => props.theme.mainRow}
  [secondRowBreak] ${props => props.theme.bottomRow}
  [bottom];
  height: 100%;
`

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
}
  body {
    background-color: #aec6cf;
}
  textarea {
    resize: none
}
`
