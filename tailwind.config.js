module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // gridTemplateColumns: {
      //   // Simple 16 column grid
      //   16: "repeat(16, minmax(0, 1fr))",

      //   // Complex site-specific column configuration
      //   // footer: "200px minmax(900px, 1fr) 100px",
      // },

      colors: {
        primary: "",
        secondary: "",
        tertiary: "",
        white: "#FFFFFF",

        BACKGROUND_GRAY: "#fafafa",
        BACKGROUND_WHITE: "#FFFFFF",
        SIDEBAR_COLOR: "#EEF2F6",

        PRIMARY_GREEN: "#27CA40",
        BACKGROUND_GREEN: "#27CAC0",

        PRIMARY_GREY: "#979797",
        CONST_GREEN: "#21B674",
        CONST_GRAY: "#555555",

        RED: {
          _100: "#FF6058",
          _200: "#E01A00",
          _300: "#FFF1F0",
          _400: "#E02020",
          _500: "#B81500",
          _600: "#EF0311",
        },

        GREEN: {
          _100: "#05944F",
          _200: "#E2FEF0",
          _300: "#00B361",
        },

        BLUE: {
          _100: "#3C48FC",
          _200: "#0048D3",
          _300: "#227EFF",
          _400: "#1A73E8",
          _500: "#3250F0",
        },

        YELLOW: {
          _100: "#A87000",
          _200: "#FFECC7",
        },

        NEUTRAL: {
          _000: "#000000",
          _100: "#EDF2F7",
          _200: "#E2E9F0",
          _300: "#CBD6E0",
          _400: "#CDD0FE",
          _500: "#718596",
          _600: "#2E4457",
          _700: "#5C6F7F",
          _800: "#212C3D",
          _900: "#6F798B",
          _910: "#3F434A",
          _1000: "#071827",
          _2000: "#A0B1C0",
          _2010: "#C4C4C4",
          _2020: "#8A9099",
        },
      },

      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      boxShadow: {
        projects: "0px 0px 10px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
