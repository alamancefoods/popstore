import styled, { StyledFunction } from 'styled-components';
import { ConditionalLink } from '../../components/main/Navigation';
import { CardCVCElement, CardNumberElement, CardExpiryElement } from 'react-stripe-elements';

interface ZedProps {
  nilCount: number;
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
  grid-template-rows: ${props => props.theme.isPortrait ? "55% 21.5% 23.5%" : "repeat(3, 33%)"};
  grid-template-areas: ${props => props.theme.isPortrait ? portraitPaymentGrid : landscapePaymentGrid};
`;

export const StyledOrderContainer = styled.div`
grid-area: order;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: ${props => props.theme.isPortrait ? 'center' : 'flex-start'};
width: 100%;
background: rgba(211, 234, 242, 0.85);
overflow-x: hidden;
overflow-y: ${props => props.theme.isPortrait ? 'scroll' : 'hidden'};
text-overflow: ellipses;
-webkit-scrollbar {
  display: none;
}
`;

export const StyledInfoContainer = styled.div`
display: flex;
padding: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
flex-direction: column;
flex-wrap: wrap;
`;

export const StyledOrderSubContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: ${props => props.theme.isPortrait ? '' : props.theme.windowHeight * 0.6}px;
`;

export const StyledH1 = styled.h1`
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

export const StyledH4 = styled.h3`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.01}px` :
    `${props.theme.windowHeight * 0.02}px`
  }; 
`;

export const StyledLabel = styled.label`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.02}px` :
    `${props.theme.windowHeight * 0.03}px`
  };
`;


export const WrappedH3 = styled.h3<ZedProps>`
font-size: ${
  props =>
    props.nilCount >= 5 && props.theme.isPortrait ?
      `${props.theme.windowHeight * 0.015}px` :
      props.nilCount >= 5 ?
        `${props.theme.windowHeight * 0.02}px` :
        `${props.theme.windowHeight * 0.025}px`
  };
padding-right: ${props => props.theme.isPortrait ? 0 : 20}px;
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
padding-top: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
padding-left: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: flex-start;
width: 75%;
  `;

export const StyledCardContainerBottom = styled.div`
font-size: ${ props => props.theme.windowHeight * 0.015} px;
padding-left: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
padding-bottom: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
display: flex;
flex-grow: 1;
flex-direction: row;
justify-content: flex-start;
width: 75%;
`;

export const FormBlock = styled.div`
display: flex;
flex-direction: column
`;

export const CardLabel = styled.label` 
font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.02 : props.theme.windowHeight * 0.02}px;
`;

export const HiddenCardLabel = styled.label`
font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.02 : props.theme.windowHeight * 0.02}px;
visibility: hidden;
`;

export const StyledCardCvc = styled(CardCVCElement)`
width: 100%;
`;

export const StyledCardNumber = styled(CardNumberElement)`
width: 100%;
`;

export const StyledCardExpiry = styled(CardExpiryElement)`
width: 100%;
`;

export const StyledCardBackground = styled.div`
grid-area: payment;
background: ${props => props.theme.isPortrait ? 'rgba(211, 234, 242, 0.85)' : ''};
width: 100%;
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




