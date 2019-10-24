import React from 'react';
import styled from 'styled-components';
import PaymentForm from '../../components/payment/PaymentForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const portraitPaymentGrid = `
"order order"
"payment payment"
"back submit"
`;

const landscapePaymentGrid = `
"order payment submit"
"order payment back"
"order payment back"
`;



export const StyledPaymentContainer = styled.main`
  display: grid;
  grid-area: firstRowBreak / firstColBreak / bottom / stop;
  height: 100%;
  width: 100%;
  position: relative;
  justify-items: center;
  justify-content: center;
  grid-template-columns: ${props => props.theme.isPortrait ? "repeat(2, 50%)" : "repeat(3, 33%)"};
  grid-template-rows: ${props => props.theme.isPortrait ? "75% 25%" : "repeat(3, 33%)"};
  grid-template-areas: ${props => props.theme.isPortrait ? portraitPaymentGrid : landscapePaymentGrid};
`;

const StyledPaymentForm = styled(props => <PaymentForm {...props} />)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`

export const StyledCardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const StyledFormPaper = styled.div`
  border: 2px solid #fffcf8;
  border-radius: 3px;
  background-color: #f8f8ff;
  padding: 10px;
`

export default StyledPaymentForm;


