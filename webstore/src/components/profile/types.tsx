import React from 'react';

export interface ProfileInterface {
  email: string;
  name: string;
  city: string;
  country: string;
  state: string;
  addressLineOne: string;
  addressLineTwo: string;
  postalCode: string;
}

export interface ProfileFormProps {
  setProfile: React.Dispatch<React.SetStateAction<ProfileInterface>>;
  setProfileCompletion: React.Dispatch<React.SetStateAction<boolean>>;
  isProfileComplete: boolean;
  profile: ProfileInterface;
  className?: string;
}
