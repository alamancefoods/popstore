import React from 'react';
import styled from 'styled-components';
import ProfileForm from '../../components/profile/ProfileForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const portraitProfileGrid = `
"form form form"
"order submit checkout"
`;

const landscapeProfileGrid = `
"form form form checkout"
"form form form submit"
"form form form order"
`;

export const StyledProfileForm = styled(Form)`
display: grid;
grid-area: firstRowBreak / firstColBreak / bottom / stop;
width: 100%;
height: 100%;
position: relative;
justify-items: center;
justify-content: center;
grid-template-columns: ${props => props.theme.isPortrait ? "repeat(3, 33%)" : "repeat(4, 25%)"};
grid-template-rows: ${props => props.theme.isPortrait ? "75% 25%" : "repeat(3, 33%)"};
grid-template-areas: ${props => props.theme.isPortrait ? portraitProfileGrid : landscapeProfileGrid};
`;

export const StyledFieldContainer = styled.main`
grid-area: form;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const SubmitButton = styled.button`
grid-area: submit;
`;


export const StyledProfileContainer = styled.div`
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  display: flex;
  align-content: center;
  align-items: center;
`;


export const StyledFormPaper = styled.div`
  border: 2px solid #fffcf8;
  border-radius: 3px;
  background-color: #f8f8ff;
  padding: 10px;
`;

export const TestStyle = styled.div`
  grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
  display: flex;
`;
