import { NO_CHOICE, ORDER } from '../constants/constants';
// Default for state initialization.
export const CHOICE_DEFAULT = { choice: NO_CHOICE };

export const INIT_DEFAULT = { init: true };

export const ORDER_DEFAULT = {
  order: {
    balance: 0,
    totalCount: 0,
    grape: 0,
    orange: 0,
    bluePunch: 0,
    lemonLime: 0,
    pineapple: 0,
    banana: 0,
    coconut: 0,
    cherry: 0,
    mango: 0,
    greenApple: 0,
    watermelon: 0,
    strawberry: 0,
    guava: 0,
    mojito: 0,
    papaya: 0
  }
};

export const DISPLAY_DEFAULT = {
  display: {
    isPortrait: true,
    windowWidth: 1152,
    windowHeight: 700,
    firstRender: true
  }
};

export const LOCATION_DEFAULT = {
  location: ORDER
};


export const PROFILE_DEFAULT = {
  profile: {
    email: "",
    name: "",
    city: "",
    country: "US",
    state: "NC",
    addressLineOne: "",
    addressLineTwo: "",
    postalCode: ""
  }
};

export const PROFILE_COMPLETION_DEFAULT = {
  isComplete: false
};
