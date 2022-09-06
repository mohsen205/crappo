import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent?: PaletteColor;
  }
  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }
}
