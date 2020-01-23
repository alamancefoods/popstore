import styled, { StyledFunction } from 'styled-components';
import { ConditionalLink } from '../../components/main/Navigation';
import { CardCVCElement, CardNumberElement, CardExpiryElement } from 'react-stripe-elements';

interface ZedProps {
  nilCount: number;
};

const portraitPaymentGrid = `
"summary summary"
"payment payment"
"submit submit"
`;

const landscapePaymentGrid = `
"summary summary payment"
"summary summary submit"
"summary summary blank"
`;




export const PaymentContainer = styled.main`
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
z-index: 0;
`;



// Primary Information Container w/ two sub-containers.

const summaryGrid = `
"order profile"
`;

export const SummaryContainer = styled.div`
grid-area: summary;
grid-template-areas: ${summaryGrid};
display: grid;
width: 100%;
background: rgba(211, 234, 242, 1);
border-top-right-radius: ${props => props.theme.isPortrait ? '0%' : '10% 15%'}; 
filter: drop-shadow(0px 2px 2px #757575);
z-index: 0;
`;

export const OrderSummary = styled.div`
grid-area: order;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: ${props => props.theme.isPortrait ? 'center' : 'flex-start'};
width: 100%;
overflow-x: hidden;
overflow-y: ${props => props.theme.isPortrait ? 'scroll' : 'hidden'};
text-overflow: ellipses;
-webkit-scrollbar {
  display: none;
}
`;

export const ProfileSummary = styled.div`
grid-area: profile;
display: flex;
flex-grow: 1;
width: 100%;
flex-direction: column;
justify-content: flex-start;
align-items: ${ props => props.theme.isPortrait ? 'center' : 'flex-start'};
width: 100 %;
`;


// Generic styles used in various places.
export const InfoContainer = styled.div`
display: flex;
padding: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
flex-direction: column;
flex-wrap: wrap;
`;

export const OrderSubContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: ${props => props.theme.isPortrait ? '' : props.theme.windowHeight * 0.6}px;
`;

export const StyledH1 = styled.h1`
font-family: 'Lalezar', cursive;
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.02}px` :
    `${props.theme.windowHeight * 0.03}px`
  };
`;


export const StyledH3 = styled.h3`
font-family: 'Roboto Condensed', sans-serif;
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


export const WrappedH3 = styled.h3<ZedProps>`
font-family: 'Roboto Condensed', sans-serif;
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


export const StyledLabel = styled.label`
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.02}px` :
    `${props.theme.windowHeight * 0.03}px`
  };
`;

// Styles related to Credit Card Payment.
export const CardBackground = styled.div`
grid-area: payment;
display: flex;
justify-content: center;
align-items: ${props => props.theme.isPortrait ? 'center' : 'flex-start'};
flex-direction: column;
background: ${props => props.theme.isPortrait ? 'rgba(211, 234, 242, 1)' : ''};
width: 100%;
filter: ${props => props.theme.isPortrait ? 'drop-shadow(0px 2px 2px #757575)' : ''};
z-index: 1;
`;

export const UpperCardElement = styled.div`
font-size: ${ props => props.theme.windowHeight * 0.015} px;
padding-top: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
padding-left: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
display: flex;
flex-grow: 1;
flex-direction: column;
align-items: ${props => props.theme.isPortrait ? 'flex-start' : ''};
justify-content: center;
width: 40%;
  `;

export const LowerCardElements = styled.div`
font-size: ${ props => props.theme.windowHeight * 0.015} px;
padding-left: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
padding-bottom: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
display: flex;
flex-grow: 1;
flex-direction: row;
align-items: center;
justify-content: flex-start;
width: 40%;
`;

export const CardCvc = styled(CardCVCElement)`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.1 : props.theme.windowWidth * 0.05}px;
`;

export const CardNumber = styled(CardNumberElement)`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.4 : props.theme.windowWidth * 0.2}px;
`;

export const CardExpiry = styled(CardExpiryElement)`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.3 : props.theme.windowWidth * 0.1}px;
`;

export const FormBlock = styled.div`
display: flex;
flex-direction: column
`;

export const CardLabel = styled.label` 
font-family: 'Lalezar', cursive;
font-size: ${props => props.theme.windowHeight * 0.03}px;
`;

export const HiddenCardLabel = styled.label`
font-family: 'Lalezar', cursive;
font-size: ${props => props.theme.windowHeight * 0.03}px;
visibility: hidden;
`;



export const LinkContainer = styled.div`
grid-area: back;
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: center;
`;

export const OrderLink = styled(ConditionalLink)`

  `;

export const ProfileLink = styled(ConditionalLink)`
  `;

export const Button = styled.button`
grid-area: submit;
height: ${ props => props.theme.isPortrait ? '5' : '10'} vh;
justify-self: center;
`;




