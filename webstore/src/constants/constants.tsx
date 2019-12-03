import { ReactComponent as Banana } from '../static/banana.svg';
import { ReactComponent as BluePunch } from '../static/blue_punch.svg';
import { ReactComponent as Cherry } from '../static/cherries.svg';
import { ReactComponent as Coconut } from '../static/coconut.svg';
import { ReactComponent as Grape } from '../static/grape.svg';
import { ReactComponent as GreenApple } from '../static/green_apple.svg';
import { ReactComponent as Guava } from '../static/guava.svg';
import { ReactComponent as LemonLime } from '../static/lemon_lime.svg';
import { ReactComponent as Mango } from '../static/mango.svg';
import { ReactComponent as Mojito } from '../static/mojito.svg';
import { ReactComponent as Orange } from '../static/orange.svg';
import { ReactComponent as Papaya } from '../static/papaya.svg';
import { ReactComponent as Pineapple } from '../static/pineapple.svg';
import { ReactComponent as Strawberry } from '../static/strawberry.svg';
import { ReactComponent as Watermelon } from '../static/watermelon.svg';

// API Key
export const STRIPE_API_KEY = 'pk_test_G0og7jUXcWI9WxiK1YUfgZKe00w9QSGkKy';

// Simple Constants.
export const LOGO_SVG = 'LOGO_SVG';
export const BUTTON_SVG = 'BUTTON_SVG';
export const MINUS_SVG = 'MINUS_SVG';
export const PLUS_SVG = 'PLUS_SVG';
export const CART_SVG = 'CART_SVG';
export const NO_CHOICE = 'NO_CHOICE';

// Constants for tracking site location.
export const ORDER = 'ORDER';
export const ORDER_TO_PROFILE = 'ORDER_TO_PROFILE';
export const LANDSCAPE_CHECKOUT_TO_PROFILE = 'CHECKOUT_TO_PROFILE';
export const PORTRAIT_CHECKOUT_TO_PROFILE = 'PORTRAIT_CHECKOUT_TO_PROFILE';
export const PROFILE = 'PROFLIE';
export const CHECKOUT = 'CHECKOUT';

// Constants for route urls.
export const ORDER_ROUTE = "/";
export const PROFILE_ROUTE = "/checkout/shipping-details";
export const CHECKOUT_ROUTE = "/complete-purchase";


// Constants for component regions:
export const ORDER_PROMPT = 'ORDER_PROMPT';
export const PROFILE_PROMPT = 'PROFILE_PROMPT';
export const PAYMENT_PROMPT = 'PAYMENT_PROMPT';

// List of button objects.
export const BUTTON_OBJECTS = [
  {
    popFlavor: 'grape',
    svg: Grape,
    popText: "Grape"
  },
  {
    popFlavor: 'orange',
    svg: Orange,
    popText: "Orange"
  },
  {
    popFlavor: 'bluePunch',
    svg: BluePunch,
    popText: "Blue Punch"
  },
  {
    popFlavor: 'lemonLime',
    svg: LemonLime,
    popText: "Lemon Lime"
  },
  {
    popFlavor: 'pineapple',
    svg: Pineapple,
    popText: "Pineapple"
  },
  {
    popFlavor: 'banana',
    svg: Banana,
    popText: "Banana"
  },
  {
    popFlavor: 'coconut',
    svg: Coconut,
    popText: "Coconut"
  },
  {
    popFlavor: 'cherry',
    svg: Cherry,
    popText: "Cherry"
  },
  {
    popFlavor: 'mango',
    svg: Mango,
    popText: "Mango"
  },
  {
    popFlavor: 'greenApple',
    svg: GreenApple,
    popText: "Green Apple"
  },
  {
    popFlavor: 'watermelon',
    svg: Watermelon,
    popText: "Watermelon"
  },
  {
    popFlavor: 'strawberry',
    svg: Strawberry,
    popText: "Strawberry"
  },
  {
    popFlavor: 'guava',
    svg: Guava,
    popText: "Guava"
  },
  {
    popFlavor: 'mojito',
    svg: Mojito,
    popText: "Mojito"
  },
  {
    popFlavor: 'papaya',
    svg: Papaya,
    popText: "Papaya"
  }
];


// State List for use in checkout form.
export const STATE_LIST: string[] = [
  'AL',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DC',
  'DE',
  'FL',
  'GA',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
];
