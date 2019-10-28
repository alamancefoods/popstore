import React from 'react';
import styled from 'styled-components';
import PaymentForm from '../../components/payment/PaymentForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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




