import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MEDIA_QUERY_THEMES } from '../../constants/constants';
import { ProviderPropTypes } from './types'
import { GlobalStyle, GridContainer } from '../../styles/root/RootStyles'
import MediaQuery from 'react-responsive';


const QueryProvider = (props: ProviderPropTypes) => {
  return(
    <div>
      {MEDIA_QUERY_THEMES.map((theme) =>
        <MediaQuery
          width={theme.width}
          height={theme.height}
          >
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <GridContainer >
              {props.children}
            </GridContainer>
          </ThemeProvider>
        </MediaQuery>
      )}
    </div>
  )
}

export default QueryProvider;
