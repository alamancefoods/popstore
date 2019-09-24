import { BUTTON_OBJECTS } from '../constants/constants';

const popConverter = (popFlavor: string) => {
  const buttonObject = BUTTON_OBJECTS.find(button => button.popFlavor === popFlavor);
  return buttonObject;
};

export default popConverter;
