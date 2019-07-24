import React from 'react';
import styled from 'styled-components';
import ProfileForm from '../../components/profile/ProfileForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';


export const StyledProfileContainer = styled.div`
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  display: flex;
  align-content: center;
  align-items: center;
`;

const StyledProfileForm = styled(props => <ProfileForm {...props} />)`
  display: flex;
  grid-area: firstRowBreak / firstColBreak / bottom /secondColBreak;
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

export const TestStyle = styled.div`
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  display: flex;
`

export default StyledProfileForm;
