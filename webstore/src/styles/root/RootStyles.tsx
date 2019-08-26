import styled, { createGlobalStyle } from 'styled-components';
import { ReactComponent as Logo } from  '../../static/logo_header.svg';
import { ReactComponent as Banana } from '../../static/banana.svg';


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

export const StyledLogoDiv = styled.div`
  display: flex;
  margin: 14px;
  justify-content: ${props => props.theme.isPortrait ? 'center' : 'left'};
  grid-area: top / firstColBreak / firstRowBreak / secondColBreak;
`

export const StyledLogo= styled(Logo)`
  filter: drop-shadow(2px 3px 1px #4444dd);
`


export const GlobalStyle = createGlobalStyle`
html, body, #root, #queryContainer {
  height: 100%;
}
  body {
    background-color: #FFFFFF;
}


  textarea {
    resize: none
}
`
