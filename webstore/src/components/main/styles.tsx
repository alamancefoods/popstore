import styled from 'styled-components';


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns:
    [start] ${props => props.theme.leftCol}
    [firstColBreak] ${props => props.theme.mainCol}
    [secondColBreak] ${props => props.theme.rightCol}
    [stop];
  grid-template-rows:
    [top] ${props => props.theme.topRow}
    [firstRowBreak] ${props => props.theme.mainRow}
    [secondRowBreak] ${props => props.theme.bottomRow}
    [bottom];
`;

export const TestButton = styled.button`
grid-column: start / firstColBreak;
grid-row: top / firstRowBreak;
`;
