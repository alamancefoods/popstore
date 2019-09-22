import React, { useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../store/store'
import { MEDIA_QUERY_THEMES } from '../../constants/constants';
import { ProviderPropTypes } from './types'
import { GlobalStyle, GridContainer } from '../../styles/root/RootStyles'
import MediaQuery from 'react-responsive';


const QueryProvider = (props: ProviderPropTypes) => {
  const [theme, setTheme] = useState(appTheme)
  const [firstRender, setFirstRender] = useState(true)


  const updateTheme = () => {
    let isPortrait = true
    let aspectRatio = window.innerWidth / window.innerHeight
    if(aspectRatio > 1024/768){
      isPortrait = false
    }else{
      isPortrait = true
    }
    setTheme(prevState => {
      return {...prevState, isPortrait: isPortrait, windowWidth: window.innerWidth, windowHeight: window.innerHeight }
    })
 }

  const onMount = () => {
    if(firstRender){
      updateTheme()
      setFirstRender(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateTheme);
    return () => {
      window.removeEventListener('resize', updateTheme);
    };
  });

  onMount()


  return(
    <div id='queryContainer'>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GridContainer >
          {props.children}
        </GridContainer>
      </ThemeProvider>
    </div>
  )
}

export default QueryProvider;
