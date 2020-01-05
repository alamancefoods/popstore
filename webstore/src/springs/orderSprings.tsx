import { useSprings, config } from 'react-spring';
import { CustomSpringProps } from './types';
import { BUTTON_OBJECTS } from '../constants/constants';
import { NO_CHOICE, ORDER } from '../constants/constants';




export const useOrderSprings = (location: string) => {
  return (
    useSprings<{}, CustomSpringProps>(
      BUTTON_OBJECTS.length,
      BUTTON_OBJECTS.map(button =>
        ({
          config: config.wobbly,
          mod: location === ORDER ? 1 : 0,
          from: { mod: 0 }
        })
      ))
  );
};
