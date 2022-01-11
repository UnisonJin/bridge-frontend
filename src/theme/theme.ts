import { alpha2Hex } from "../helpers/alpha2Hex";

const defaultTheme = {
  primaryStress: "#274BDB",
  primaryBrand: "#3366FF",
  primaryReduce: "#598BFF",
  secondBrand: "#8F9BB3",
  primaryBackground: "#17171A",
  secondBackground: "#232530",
  primaryBorder: "#40424E",
  primaryUnable: "#8F9BB3" + alpha2Hex(25),
  surfacePrimary: "#FFFFFF",
  surfacePrimary10: "#2E3A59" + alpha2Hex(10),
  infoDanger: "#FF3D71",
  infoWarning: "#FFAA00", // Yellow
  textWarning: "#17171A", // Black
  infoSuccess: "#00E096",
  unityWhite: "#FFFFFF",
  unityBlack: "#0A1E42",
  primayMask: "#17171A" + alpha2Hex(90),
  globalBg: "linear-gradient(180deg, #313443 0%, #17171A 31.77%)",
  data: "#00E096",
  chainBg: "#393a43",
  tableBg: "#17171A",
  modalMask: "#000000" + alpha2Hex(90),
  addTipsBg: "#17171a",
  transferSuccess: "#00E096",
  selectChainBorder: "#40424E",
  slippageToleranceBg: "#232530",
  slippageToleranceBorder: "#40424E",
  transferCover: "#222222" + alpha2Hex(50),
  pageFlipperBg: "#2E303A",
  pageFlipperColor: "#FFFFFF",
  historyRebutton: "#B6C5FF",
  disableButtonBg: "#8F9BB33D",
  historyNoData: "#FFFFFF",
  celerGreen: "#00B42A",
  blurBg: "#17171AE5",
  sliderTrack: "#00E096",
};

const themeMap = {
  dark: defaultTheme,
  light: {
    primaryReduce: "#598BFF",
    primaryBrand: "#3366FF",
    primaryStress: "#274BDB",
    secondBrand: "#8F9BB3",
    primaryBackground: "#F2F7FE",
    secondBackground: "#FFFFFF",
    primaryBorder: "#EDF1F7",
    primaryUnable: "#8F9BB3" + alpha2Hex(25),
    infoDanger: "#FF3D71",
    infoWarning: "#FF7D00",
    infoSuccess: "#00B42A",
    surfacePrimary: "#2E3A59",
    surfacePrimary10: "#2E3A59" + alpha2Hex(10),
    unityWhite: "#FFFFFF",
    unityBlack: "#0A1E42",
    primayMask: "#0A1E42" + alpha2Hex(90),
    globalBg: "linear-gradient(180deg, #F7F8FE 0%, #E7EBF6 100%)",
    data: "#3366FF",
    chainBg: "#ffffff",
    tableBg: "#f2f4fb",
    modalMask: "#0A1E42" + alpha2Hex(10),
    addTipsBg: "#fff7e8",
    transferSuccess: "#00B42A",
    selectChainBorder: "#EDF1F7",
    slippageToleranceBg: "#EDF1F7",
    slippageToleranceBorder: "#2E3A59" + alpha2Hex(10),
    transferCover: "#FFFFFF" + alpha2Hex(50),
    pageFlipperBg: "#2E3A59" + alpha2Hex(10),
    pageFlipperColor: "#2E3A59",
    historyRebutton: "#8F9BB3",
    disableButtonBg: "#8F9BB33D",
    historyNoData: "#2E3A59",
    blurBg: "#1F2A4D80",
    sliderTrack: "#3366FF",
  },
};

export type Theme = typeof defaultTheme;

export default function getDefaulTheme(themeType: "dark" | "light") {
  return themeMap[themeType];
}
