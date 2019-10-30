import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ProviderPropTypes } from './types';
import { DISPLAY_DEFAULT } from '../../redux/stateDefaults';
import { GlobalStyle } from '../../styles/root/RootStyles';
import { updateDisplay } from '../../redux/display/actions';



const QueryProvider = (props: ProviderPropTypes) => {
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state.displayReducer.display);


  // Update display dimensions if they change.
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateDisplay(firstRender));
    });
    return () => {
      window.removeEventListener('resize', () => {
        dispatch(updateDisplay(firstRender));
      });
    };
  });


  // Function to call on first load. Ensures that proper theme is set.
  const onMount = () => {
    if (firstRender) {
      dispatch(updateDisplay(firstRender));
      setFirstRender(false);
    }
  };

  onMount();


  return (
    <>
      <ThemeProvider theme={() => (display)}>
        <>
          <GlobalStyle />
          {props.children}
        </>
      </ThemeProvider>
    </>
  );
};

export type ThemeType = typeof DISPLAY_DEFAULT.display;
export default QueryProvider;
