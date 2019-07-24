import { OrderInterface } from '../order/types';
import { ProfileInterface } from '../profile/types';

export interface ProtectedProfileRouteProps{
  order: OrderInterface;
  setProfile: React.Dispatch<React.SetStateAction<ProfileInterface>>;
  setProfileCompletion: React.Dispatch<React.SetStateAction<boolean>>;
  isProfileComplete: boolean;
}

export interface ProtectedPaymentRouteProps {
  order: OrderInterface;
  profile: ProfileInterface;
  isProfileComplete: boolean;
}
