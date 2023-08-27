import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
	interface PaletteColor {
		darker?: string;
	}
	interface SimplePalleteColorOptions {
		darker?: string;
	}
	interface Palette {
		neutral: Palette["primary"];
	}
	interface PaletteOptions {
		neutral: PaletteOptions["primary"];
	}
}

export const lightModePalette: PaletteOptions = {
	primary: {},
	secondary: {},
	neutral: {},
};

export const darkModePalette: PaletteOptions = {
	primary: {},
	secondary: {},
	neutral: {},
};
