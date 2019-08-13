export interface PopInterface {
  'Total': string;
  'Grape': string;
  'Orange': string;
  'Blue Punch': string;
  'Lemon Lime': string;
  'Pineapple': string;
  'Banana': string;
  'Coconut': string;
  'Cherry': string;
  'Mango': string;
  'Green Apple': string;
  'Watermelon': string;
  'Strawberry': string;
  'Guava': string;
  'Mojito': string;
  'Papaya': string;
  [index: string]: string;
}

export type ThemeType = {
  deviceType: string;
  width: number,
  height: number,
  orientation: "portrait" | "landscape" | undefined,
  leftCol: string;
  mainCol: string;
  rightCol: string;
  topRow: string;
  mainRow: string;
  bottomRow: string;
  entryContainerHeight: string;
  isPortrait: boolean;
}
