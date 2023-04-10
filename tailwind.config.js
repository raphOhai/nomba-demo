const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },

      backgroundImage: theme => ({
        "nomba-pro-hero-bg": "url('src/assets/images/left-slash.png')",
        "nomba-subtract": "url('src/assets/images/jpegs/Subtract.png')",
        "bg-parallax": "url('src/assets/images/jpegs/small-business/parallax-image.png')",
        "card-bg-1": "url('src/assets/images/card-bg-1.png')",
        "card-bg-2": "url('src/assets/images/card-bg-2.png')",
        "bg-parallax-blank": "url('src/assets/images/jpegs/small-business/blank.png')",
      }),

      colors: {
        primary: {
          DEFAULT: "#121212",
          100: "#FFFFFF",
          200: "#FBFBFB",
          300: "#EFEFEF",
          400: "#DDDDDD",
          500: "#C6C6C6",
          600: "#999999",
          700: "#BBBBBB",
          800: "#868686",
          900: "#444444",
          1000: "#1F1F1F",
          1100: "#171616",
        },
        secondary: {
          DEFAULT: "#FFCC00",
          100: "#FFFAE6",
          200: "#FFF0B3",
          300: "#FFE680",
          400: "#FFDB4D",
          500: "#CCA300",
          600: "#997A00",
          700: "#665200",
          800: "#332900",
        },
        alternative: {
          DEFAULT: "#008ADC",
          100: "#E6F3FC",
          200: "#B3DCF5",
          300: "#80C5EE",
          400: "#4DADE7",
          500: "#00619A",
          600: "#00456E",
          700: "#002942",
          800: "#000E16",
        },
        action: {
          success: "#36CC4F",
          error: {
            DEFAULT: "#FF0000",
            light: "#FBEEF3",
          },
        },
        n: {
          yellow: "#ffcc00",
          light: "#ffffff",
          grey1: "#eeeeee",
          grey2: "#c6c6c6",
          grey3: "#999999",
          grey4: "#717171",
          grey5: "#555555",
          grey6: "#383838",
          grey7: "#828282",
          dark: "#121212",
          red: "#ff2200",
          green: " #11bb00",
        },
        c: {
          0: "#000000",
          dark: "#111111",
          grey4: "#666666",
          faint: "#e5e4da",
        },
        gray: {
          5: "#E0E0E0",
        },
      },

      boxShadow: {
        subMenu: " 0px 4px 100px rgba(41, 45, 50, 0.09)",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulseCustom: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        squareToCircle: {
          "0%": {
            borderRadius: "5px",
          },
          "100%": {
            borderRadius: "250px",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out 2",
        pulseCustom: "pulseCustom 1s ease-in-out 2",
        squareToCircle: "squareToCircle .5s ease-in-out 1",
        fadeIn: "fadeIn 1.5s ease-in-out 1",
      },
    },

    screens: {
      xs: "250px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
