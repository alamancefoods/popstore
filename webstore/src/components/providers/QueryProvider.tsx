import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MEDIA_QUERY_THEMES } from '../../constants/constants';
import { ProviderPropTypes } from './types'
import { GlobalStyle, GridContainer } from '../../styles/root/RootStyles'
import MediaQuery from 'react-responsive';


const QueryProvider = (props: ProviderPropTypes) => {
  return(
    <div id='queryContainer'>
      {MEDIA_QUERY_THEMES.map((theme) =>
        <MediaQuery
          minWidth={theme.minWidth}
          maxWidth={theme.maxWidth}
          minAspectRatio={theme.minAspectRatio}
          maxAspectRatio={theme.maxAspectRatio}
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
