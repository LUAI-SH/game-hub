import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    blackAlpha: {
    //   50: "rgba(0,0,0,0.04)",
    //   100: "#ededed",
    //   200: "#d3d3d3",
    //   300: "#b3b3b3",
    //   400: "#a0a0a0",
    //   500: "#898989",
    //   600: "#6c6c6c",
      700: "", // Fix heading color bug when switching from dark to white mode
    //   800: "#121212",
    //   900: "#111",
    },
    // whiteAlpha: {
    //   50: "#f9f9f9",
    //   100: "#ededed",
    //   200: "#d3d3d3",
    //   300: "#b3b3b3",
    //   400: "#a0a0a0",
    //   500: "#898989",
    //   600: "#6c6c6c",
    //   700: "#rgba(0,0,0,0.80)",
    //   800: "#121212",
    //   900: "#111",
    // },
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;
