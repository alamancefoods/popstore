import React from 'react';
import { animated } from 'react-spring';
import { ReactComponent as ExampleIc } from '../../static/buttonPanel.svg';
import { useSelector } from 'react-redux';
import { SubmitAnimInterface } from './types';


export const SubmitAnim = ({ panelSpring, className }: SubmitAnimInterface) => {
  const display = useSelector((state: any) => state.displayReducer.display);


  const { strokeDashoffset } = panelSpring;

  return (
    <animated.svg
      className={className}
      strokeDasharray={100}
      strokeDashoffset={strokeDashoffset}
      height={display.windowHeight * 0.075}
    ><ExampleIc />
    </animated.svg >
  );
};

