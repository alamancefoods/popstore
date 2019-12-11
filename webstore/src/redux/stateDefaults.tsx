import { NO_CHOICE, ORDER } from '../constants/constants';
// Default for state initialization.
export const CHOICE_DEFAULT = { choice: NO_CHOICE };

export const INIT_DEFAULT = { init: true };

export let ORDER_DEFAULT: any;

if (process.env.REACT_APP_JSTEST === 'true') {
  ORDER_DEFAULT = {
    order: {
      balance: 750,
      totalCount: 15,
      grape: 1,
      orange: 1,
      bluePunch: 1,
      lemonLime: 1,
      pineapple: 1,
      banana: 1,
      coconut: 1,
      cherry: 1,
      mango: 1,
      greenApple: 1,
      watermelon: 1,
      strawberry: 1,
      guava: 1,
      mojito: 1,
      papaya: 1
    }
  };
} else {
  ORDER_DEFAULT = {
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
}



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

export let PROFILE_DEFAULT: any;

if (process.env.REACT_APP_JSTEST === 'true') {
  PROFILE_DEFAULT = {
    profile: {
      email: "huntertempleman@gmail.com",
      name: "Hunter Templeman",
      city: "Denver",
      country: "US",
      state: "CO",
      addressLineOne: "1540 N Grant St.",
      addressLineTwo: "Apt 9",
      postalCode: "80203"
    }
  };
} else {
  PROFILE_DEFAULT = {
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

}


export const PROFILE_COMPLETION_DEFAULT = {
  isComplete: false
};

export const PURCHASE_DEFAULT = {
  isComplete: false
};
