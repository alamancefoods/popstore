import styled, { StyledFunction } from 'styled-components';
import { ConditionalLink } from '../../components/main/Navigation';

interface ZedProps {
  zedCount: number;
};

const portraitPaymentGrid = `
"order profile"
"payment payment"
"back submit"
`;

const landscapePaymentGrid = `
"order profile payment"
"order profile payment"
"order profile submit"
`;



export const StyledPaymentContainer = styled.main`
  display: grid;
  grid-area: firstRowBreak / firstColBreak / bottom / stop;
  height: 100%;
  width: 100%;
  position: relative;
  justify-items: center;
  justify-content: center;
  grid-template-columns: ${props => props.theme.isPortrait ? "repeat(2, 50%)" : "45% 25% 30%"};
  grid-template-rows: ${props => props.theme.isPortrait ? "60% 20% 20%" : "repeat(3, 33%)"};
  grid-template-areas: ${props => props.theme.isPortrait ? portraitPaymentGrid : landscapePaymentGrid};
`;

export const StyledOrderContainer = styled.div`
grid-area: order;
display: inline-flex;
flex-shrink: 1;
flex-direction: column;
justify-content: flex-start;
align-items: ${props => props.theme.isPortrait ? 'center' : 'flex-start'};
width: 100%;
background: rgba(211, 234, 242, 0.85);
flex-wrap: wrap;
`;

export const StyledInfoContainer = styled.div`
display: flex;
padding: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
flex-direction: column;
flex-wrap: wrap;
`;

export const StyledH1 = styled.h1`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.02}px` :
    `${props.theme.windowHeight * 0.03}px`
  };
`;

export const StyledLabel = styled.label`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.02}px` :
    `${props.theme.windowHeight * 0.03}px`
  };
`;

export const StyledH3 = styled.h3`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.015}px` :
    `${props.theme.windowHeight * 0.025}px`
  }; 
`;

export const WrappedH3 = styled.h3<ZedProps>`
font-size: ${
  props =>
    props.zedCount >= 5 && props.theme.isPortrait ?
      `${props.theme.windowHeight * 0.015}px` :
      props.zedCount >= 5 ?
        `${props.theme.windowHeight * 0.010}px` :
        `${props.theme.windowHeight * 0.025}px`
  };
`;


export const StyledProfileContainer = styled.div`
grid-area: profile;
display: flex;
flex-grow: 1;
width: 100%;
flex-direction: column;
justify-content: flex-start;
align-items: ${ props => props.theme.isPortrait ? 'center' : 'flex-start'};
width: 100 %;
background: rgba(211, 234, 242, 0.85);
border-top-right-radius: ${ props => props.theme.isPortrait ? '0%' : '28% 15%'};
`;

export const StyledCardContainer = styled.div`
font-size: ${ props => props.theme.windowHeight * 0.015} px;
grid-area: payment;
padding: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: flex-start;
width: 75%;
  `;

export const StyledLinkContainer = styled.div`
grid-area: back;
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: center;
`;

export const StyledOrderLink = styled(ConditionalLink)`

  `;

export const StyledProfileLink = styled(ConditionalLink)`
  `;

export const StyledFormButton = styled.button`
grid-area: submit;
height: ${ props => props.theme.isPortrait ? '5' : '10'} vh;
justify-self: center;
`;




