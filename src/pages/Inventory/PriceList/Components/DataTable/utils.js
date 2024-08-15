export const formatNumber = (value, decimalPlaces = 2, roundValues, roundingMethod) => {
  if (typeof value !== "number") return value;
  if (roundValues) {
    return roundingMethod === "round" ? Math.round(value) : Math.trunc(value);
  }
  return Number(value.toFixed(decimalPlaces));
};

export const formatDecimalInput = (value, maxDecimalPlaces = 2) => {
  const [integerPart, decimalPart] = value.replace(/[^0-9.]/g, "").split(".");
  return decimalPart 
    ? `${integerPart}.${decimalPart.slice(0, maxDecimalPlaces)}` 
    : integerPart;
};