let popOrder = {
  balance: 0,
  totalCount: 0,
  grapeCount: 0,
  orangeCount: 0,
  bluePunchCount: 0,
  lemonLimeCount: 0,
  pinaColadaCount: 0,
  bananaCount: 0,
  peachCount: 0,
  cherryCount: 0,
  mangoCount: 0,
  greenAppleCount: 0,
  watermelonCount: 0,
  strawberryCount: 0,
  guavaCount: 0,
  mojitoCount: 0,
  papayaCount: 0
}

let customerProfile = {
  email: "",
  name: "",
  city: "",
  country: "U.S.A.",
  state: "NC",
  addressLineOne: "",
  addressLineTwo: "",
  postalCode: ""
}

let buttonList = [
  'Grape',
  'Orange',
  'Blue Punch',
  'Lemon Lime',
  'Pina Colada',
  'Banana',
  'Peach',
  'Cherry',
  'Mango',
  'Green Apple',
  'Watermelon',
  'Strawberry',
  'Guava',
  'Mojito',
  'Papaya'
]

let pickedPopList: string[] = []

let store = {popOrder, customerProfile, buttonList, pickedPopList}

export default store;
