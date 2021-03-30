import { Colors } from "./types";

export const baseColors = {
  failure: "#db6265",
  primary: "#751113",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#751113",
  success: "#751113",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#000000",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#751113",
  textDisabled: "#BDC2C4",
  textSubtle: "#751113",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  failure: "#771014",
  primary: "#b41f25",
  primaryBright: "#ffefdf",
  primaryDark: "#0098A1",
  secondary: "#b41f25",
  success: "#1e6f5c",
  warning: "#FFB237",

  background: "#100C18",
  backgroundDisabled: "#1f1f1f",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#333333",
  inputSecondary: "#b41f25",
  tertiary: "#353547",
  text: "#e7e8ea",
  textDisabled: "#666171",
  textSubtle: "#a8a9ad",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #100C18 0%, #100C18 100%)",
  },
};
