import { BUTTON_PROPS } from '../constants/constants';

const popConverter = (popString: string) => {
  const rePopString = popString.replace(/\s+/g, '-')
  const parsedFlavor = BUTTON_PROPS.find(theme => theme.popFlavor === rePopString)
  return parsedFlavor
}

export default popConverter;
