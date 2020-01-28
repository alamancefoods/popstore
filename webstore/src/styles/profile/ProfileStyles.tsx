import styled from 'styled-components';
import { Form, Field } from 'formik';
import { ConditionalLink } from '../../components/main/Navigation';
import { ErrorMessage } from 'formik';

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
background: rgba(211, 234, 242, 1);
border-top-right-radius: ${props => props.theme.isPortrait ? '0%' : '10% 15%'}; 
filter: drop-shadow(0px 2px 2px #757575);
width: 100%;
`;


export const FormPlacement = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
`;


export const InputSection = styled.div`
margin: 5px;
display: flex;
flex-direction: column;
justify-content: left;
`;

interface FieldProps {
  errors?: any;
};

export const StyledField = styled(Field) <FieldProps>`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.7 : props.theme.windowWidth * 0.25}px;
height: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.03 : props.theme.windowHeight * 0.04}px;
border-radius: ${props => props.theme.windowHeight * 0.02}px;
background: rgba(120, 210, 240, 0.75);
border: ${props => props.errors ? '1px solid red' : '0px'};
margin: 2px;
`;


export const ErrBox = styled.div`
height: ${props => props.theme.windowHeight * 0.001}px;
font-size: ${props => props.theme.isPortrait ?
    props.theme.windowHeight * 0.015 :
    props.theme.windowHeight * 0.02}px;
color: red;
`;


export const StyledDropdown = styled(Field)`
width: ${props => props.theme.isPortrait ? props.theme.windowWidth * 0.20 : props.theme.windowWidth * 0.05}px;
height: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.04 : props.theme.windowHeight * 0.05}px;
background: rgba(120, 210, 240, 0.75);
border-bottom-left-radius: ${props => props.theme.windowHeight * 0.02}px;
border-top-left-radius: ${props => props.theme.windowHeight * 0.02}px;
border: 0px;
margin: 2px;
`;

export const Label = styled.label`
font-family: 'Lalezar', cursive;
font-size: ${props => props.theme.isPortrait ? props.theme.windowHeight * 0.02 : props.theme.windowHeight * 0.03}px;
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
