// Utility function for rendering the running balance into a sensible string.

export const convertPopCountToCharge = (popCount: number, isCents: boolean) => {
  let totalCharge: number
  if (popCount < 50) {
    totalCharge = popCount * 25;
  } else {
    totalCharge = popCount * 10;
  }
  let dollarsCharge = totalCharge / 100;
  return Number(dollarsCharge).toFixed(2);
};
