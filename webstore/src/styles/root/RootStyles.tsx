import styled, { createGlobalStyle } from 'styled-components';
import { ReactComponent as Logo } from  '../../static/logo_header.svg';
import { ReactComponent as Banana } from '../../static/banana.svg';



export const GridContainer = styled.div`
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
  justify-items: center;
  height: 100%;
`

export const StyledLogoDiv = styled.div`
  display: flex;
  margin: 14px;
  justify-content: ${props => props.theme.isPortrait ? 'center' : 'left'};
  align-items: center;
  grid-area: top / firstColBreak / firstRowBreak / secondColBreak;
`

export const StyledLogo= styled(Logo)`
  filter: drop-shadow(2px 3px 1px #4444dd);
`


export const GlobalStyle = createGlobalStyle`
html, body, #root, #queryContainer {
  height: 100%;
  margin: 0;
  padding: 0;
  resize: none;
}
  body {
    background-color: #FFFFFF;
}

svg {
  overflow: visible;
}

  textarea {
    resize: none
}
`
