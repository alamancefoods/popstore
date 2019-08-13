let popOrder = {
  balance: 0,
  totalCount: 0,
  grape: 0,
  orange: 0,
  bluePunch: 0,
  lemonLime: 0,
  pinaColada: 0,
  banana: 0,
  peach: 0,
  cherry: 0,
  mango: 0,
  greenApple: 0,
  watermelon: 0,
  strawberry: 0,
  guava: 0,
  mojito: 0,
  papaya: 0
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
  'Pineapple',
  'Banana',
  'Coconut',
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
