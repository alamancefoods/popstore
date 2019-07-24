import React from 'react';
import styled from 'styled-components';
import PaymentForm from '../../components/payment/PaymentForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';


export const StyledPaymentContainer = styled.div`
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  display: flex;
  align-content: center;
  align-items: center;
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


