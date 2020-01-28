import styled, { StyledFunction } from 'styled-components';
import { ConditionalLink } from '../../components/main/Navigation';
import { CardCVCElement, CardNumberElement, CardExpiryElement } from 'react-stripe-elements';

interface ZedProps {
  nilCount: number;
};

const portraitPaymentGrid = `
"summary summary"
"submit submit"
`;

const landscapePaymentGrid = `
"summary payment"
"summary submit"
"summary blank"
`;




export const PaymentContainer = styled.main`
  display: grid;
  grid-area: firstRowBreak / firstColBreak / bottom / stop;
  height: 100%;
  width: 100%;
  position: relative;
  justify-items: center;
  justify-content: center;
  grid-template-columns: ${props => props.theme.isPortrait ? "repeat(2, 50%)" : "70% 30%"};
  grid-template-rows: ${props => props.theme.isPortrait ? "76.5% 23.5%" : "repeat(3, 33%)"};
  grid-template-areas: ${props => props.theme.isPortrait ? portraitPaymentGrid : landscapePaymentGrid};
z-index: 0;
`;



// Primary Information Container w/ two sub-containers.

const landscapeSummaryGrid = `
"order profile credit"
`;

const portraitSummaryGrid = `
"order profile"
"credit credit"
`;

export const SummaryContainer = styled.div`
grid-area: summary;
grid-template-areas: ${props => props.theme.isPortrait ?
    portraitSummaryGrid : landscapeSummaryGrid};
display: grid;
width: 100%;
background: rgba(211, 234, 242, 1);
grid-template-columns: ${props => props.theme.isPortrait ?
    "50% 50%" :
    "33.3% 33.3% 33.3%"};
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

export const CreditSummary = styled.div`
grid-area: credit;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
`;

// Styles related to Credit Card Payment.
export const CardBackground = styled.div`
grid-area: payment;
padding: ${props => props.theme.isPortrait ? 5 : props.theme.windowWidth * 0.03}px;
display: flex;
justify-content: center;
align-items: ${props => props.theme.isPortrait ? 'center' : 'flex-start'};
flex-direction: column;
background: ${props => props.theme.isPortrait ? 'rgba(211, 234, 242, 1)' : ''};
width: 95%;
z-index: 1;
`;

export const UpperCardElement = styled.div`
font-size: ${ props => props.theme.windowHeight * 0.015} px;
display: flex;
flex-grow: 1;
flex-direction: column;
align-items: ${props => props.theme.isPortrait ? 'flex-start' : ''};
justify-content: center;
width: ${props => props.theme.isPortrait ? '40%' : '100%'};
  `;

export const LowerCardElements = styled.div`
font-size: ${ props => props.theme.windowHeight * 0.015} px;
display: flex;
flex-grow: 1;
flex-direction: row;
align-items: center;
justify-content: flex-start;
width: ${props => props.theme.isPortrait ? '40%' : '100%'};
`;

export const CardCvc = styled(CardCVCElement)`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.1 : props.theme.windowWidth * 0.05}px;
color: rgb(110, 110, 224);
`;

export const CardNumber = styled(CardNumberElement)`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.4 : props.theme.windowWidth * 0.2}px;
color: rgb(110, 110, 224);
`;

export const CardExpiry = styled(CardExpiryElement)`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.3 : props.theme.windowWidth * 0.1}px;
color: rgb(110, 110, 224);
`;

export const FormBlock = styled.div`
width: 100%;
display: flex;
flex-direction: column;
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


export const CardErrorWarning = styled.h3`
font-family: 'Roboto Condensed', sans-serif;
align-self: center;
justify-self: center;
color: red;
width: 70%;
font-size: ${props =>
    props.theme.isPortrait ?
      props.theme.windowHeight * 0.015 :
      props.theme.windowHeight * 0.02}px;
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

export const StyledLabel = styled.label`
font-family: 'Lalezar', cursive;
width: 100%;
font-size: ${
  props => props.theme.isPortrait ?
    `${props.theme.windowHeight * 0.03}px` :
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
      `${props.theme.windowHeight * 0.02}px` :
      props.nilCount >= 5 ?
        `${props.theme.windowHeight * 0.02}px` :
        `${props.theme.windowHeight * 0.025}px`
  };
padding-right: ${props => props.theme.isPortrait ? 0 : 20}px;
`;




export const LinkContainer = styled.div`
grid-area: back;
display: flex;
flex-grow: 1;

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




