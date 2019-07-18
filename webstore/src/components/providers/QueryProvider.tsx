import React from 'react';
import { MEDIA_QUERY_THEMES } from '../../constants/constants';
import { ProviderPropTypes } from './types'
import { GridContainer } from '../main/styles';
import MediaQuery from 'react-responsive';


const QueryProvider = (props: ProviderPropTypes) => {
  return(
    <div>
      {MEDIA_QUERY_THEMES.map((theme) =>
        <MediaQuery
          minWidth={theme.minWidth}
          maxWidth={theme.maxWidth}
          orientation={theme.orientation}
          >
          <GridContainer theme={theme}>
            {props.children}
          </GridContainer>
        </MediaQuery>
      )}
    </div>
  )
}

export default QueryProvider;
