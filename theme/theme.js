import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import storage from '../utils/storage';

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      background: "#141b2d",
      dialog: "#1F2A40",
      success: "#1EB450",
      error: "#F44336",
      warning: "#F09C00",
      accent: "#e3096f",
      divider: "#2A3A5B",
      shadow: "rgba(0, 0, 0, 0.5)",
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      primary: {
        100: "#f0f0f0",
        200: "#e6e6e6",
        300: "#c8c8c8",
        400: "#b4b4b4",
        500: "#a0a0a0",
        600: "#8c8c8c",
        700: "#646464",
        800: "#5a5a5a",
        900: "#3c3c3c",
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
      },
    }
    : {
      background: "#F0F0F0",
      dialog: "#FFFFFF",
      success: "#1EB450",
      error: "#F44336",
      warning: "#F09C00",
      accent: "#e3096f",
      divider: "#E0E0E0",
      shadow: "rgba(0, 0, 0, 0.25)",
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#a3a3a3",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
      },
      primary: {
        100: "#3c3c3c",
        200: "#5a5a5a",
        300: "#646464",
        400: "#8c8c8c",
        500: "#a0a0a0",
        600: "#b4b4b4",
        700: "#c8c8c8",
        800: "#e6e6e6",
        900: "#f0f0f0",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.background,
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.background,
          },
        }),
    },
    typography: {
      fontFamily: ["Proxima Nova", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Proxima Nova", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Proxima Nova", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Proxima Nova", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Proxima Nova", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Proxima Nova", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Proxima Nova", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const localMode = storage.get("theme");
    if (localMode) {
      setMode(localMode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        storage.set("theme", mode === "light" ? "dark" : "light");
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      }
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
