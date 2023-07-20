import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"]):not([role="textbox"])': {
        boxShadow: "none !important",
      },
    },
  },
  colors: {
    primary: "#ffcc00",
    yellow: {
      DEFAULT: "#ffcc00",
      100: "#ffcc00",
      200: "#ffcc00",
      300: "#ffcc00",
      400: "#ffcc00",
      500: "#ffcc00",
      600: "#ffcc00",
    },
  },
  components: {
    Tab: {
      baseStyle: {
        _selected: { color: "white", borderBottom: "2px", borderColor: "#FFDD55" },
        color: "#717171",
      },
    },
  },
};

export default extendTheme(theme);
