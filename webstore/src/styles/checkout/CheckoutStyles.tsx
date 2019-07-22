import React from 'react';
import styled from 'styled-components';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';


export const StyledCheckoutContainer = styled.div`
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  display: flex;
  align-content: center;
  align-items: center;
`;

const StyledCheckoutForm = styled(props => <CheckoutForm {...props} />)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledFormPaper = styled.div`
  border: 2px solid #fffcf8;
  border-radius: 3px;
  background-color: #f8f8ff;
  padding: 10px;
`

export default StyledCheckoutForm;


