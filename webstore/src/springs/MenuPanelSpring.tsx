import { useSpring } from 'react-spring';
import { PROFILE_ROUTE } from '../constants/constants';

export function MenuPanelSpring() {

  const { strokeDashoffset } = useSpring({
    strokeDashoffset: 0,
    mod: 0,
    from: { strokeDashoffset: 100, mod: 1 }
  });

  return { strokeDashoffset };
}
