import { breakpoints } from "./breakpoints/breakpoints";
import { components } from "./components/components";
import { darkModePalette, lightModePalette } from "./palette/palette";
import { transitions } from "./transition/transition";
import { typography } from "./typography/typography";
import {
	createTheme,
	experimental_extendTheme as extendTheme,
} from "@mui/material";
import { orange } from "@mui/material/colors";

export enum ThemeVariantsProps {
	light = "light",
	dark = "dark",
}

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

export const theme = (mode: ThemeVariantsProps) => {
	return createTheme({
		palette: {
			mode,
			...(mode === "light" ? lightModePalette : darkModePalette),
		},
		typography,
		// spacing,
		breakpoints,
		transitions,
		components,
		status: {
			danger: orange[500],
		},
	});
};

export const cssVarsTheme = (mode: ThemeVariantsProps) => {
	return extendTheme({
		colorSchemes: {
			light: {
				palette: {
					primary: {},
					secondary: {},
					neutral: {},
				},
			},
			dark: {
				palette: {
					primary: {},
					secondary: {},
					neutral: {},
				},
			},
		},
	});
};
