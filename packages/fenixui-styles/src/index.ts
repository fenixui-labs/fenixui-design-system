import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { darkModePalette, lightModePalette } from "./palette";
import { spacing } from "./spacing";
import { transitions } from "./transition";
import { typography } from "./typography";
import { createTheme } from "@mui/material";
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
		spacing,
		breakpoints,
		transitions,
		components,
		status: {
			danger: orange[500],
		},
	});
};
