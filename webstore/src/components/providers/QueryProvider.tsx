import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ProviderPropTypes } from './types';
import { DisplayState } from '../../redux/display/types';
import { GlobalStyle, GridContainer } from '../../styles/root/RootStyles';
import { updateDisplay } from '../../redux/display/actions';


const QueryProvider = (props: ProviderPropTypes) => {
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state.displayReducer.display);


  // Update display dimensions if they change.
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateDisplay());
    });
    return () => {
      window.removeEventListener('resize', () => {
        dispatch(updateDisplay());
      });
    };
  });


  // Function to call on first load. Ensures that proper theme is set.
  const onMount = () => {
    if (firstRender) {
      dispatch(updateDisplay());
      setFirstRender(false);
    }
  };

  console.log(display);


  onMount();


  return (
    <div id='queryContainer'>
      <GlobalStyle />
      <ThemeProvider theme={() => (display)}>
        <GridContainer >
          {props.children}
        </GridContainer>
      </ThemeProvider>
    </div>
  );
};

export default QueryProvider;
