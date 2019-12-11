import styled from 'styled-components';
import { Form } from 'formik';
import { ConditionalLink } from '../../components/main/Navigation';

const portraitProfileGrid = `
"form form form"
"order submit checkout"
`;

const landscapeProfileGrid = `
"form form empty"
"form form submit"
"form form blank"
`;

export const StyledProfileForm = styled(Form)`
display: grid;
grid-area: firstRowBreak / firstColBreak / bottom / stop;
width: 100%;
height: 100%;
position: relative;
justify-items: center;
justify-content: center;
grid-template-columns: ${props => props.theme.isPortrait ? "repeat(3, 33%)" : "35% 35% 30%"};
grid-template-rows: ${props => props.theme.isPortrait ? "76.5% 23.5%" : "33% 33% 33%"};
grid-template-areas: ${props => props.theme.isPortrait ? portraitProfileGrid : landscapeProfileGrid};
`;


export const StyledFieldContainer = styled.main`
grid-area: form;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgba(211, 234, 242, 0.85);
border-top-right-radius: ${props => props.theme.isPortrait ? '0%' : '10% 15%'}; 
width: 100%;
`;

export const SubmitButton = styled.button`
grid-area: submit;
`;

export const StyledOrderNav = styled(ConditionalLink)`
grid-area: order;
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
