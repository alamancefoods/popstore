import styled from 'styled-components';
import { ConditionalLink } from '../../components/main/Navigation';


const portraitPaymentGrid = `
"order profile"
"payment payment"
"back submit"
`;

const landscapePaymentGrid = `
"order profile back"
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
  grid-template-columns: ${props => props.theme.isPortrait ? "repeat(2, 50%)" : "40% 40% 20%"};
  grid-template-rows: ${props => props.theme.isPortrait ? "50% 25% 25%" : "repeat(3, 33%)"};
  grid-template-areas: ${props => props.theme.isPortrait ? portraitPaymentGrid : landscapePaymentGrid};
`;

export const StyledOrderContainer = styled.div`
grid-area: order;
display: flex;
flex-grow: 1;
flex-direction: column;
`;

export const StyledFlavorContainer = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
flex-wrap: wrap;
`;

export const StyledH1 = styled.h1`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.02}px` :
    `${props.theme.windowHeight * 0.025}px`
  };
`;

export const StyledH3 = styled.h3`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.015}px` :
    `${props.theme.windowHeight * 0.02}px`
  };
`;

export const StyledProfileContainer = styled.div`
grid-area: profile;
display: flex;
flex-grow: 1;
flex-direction: column;
`;

export const StyledCardContainer = styled.div`
grid-area: payment;
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: center;
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

export const StyledSubmitButton = styled.button`
grid-area: submit;
justify-self: center;
`;




