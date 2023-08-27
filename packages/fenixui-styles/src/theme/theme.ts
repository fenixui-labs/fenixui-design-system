import { breakpoints } from "./breakpoints/breakpoints";
import { components } from "./components/components";
import { darkModePalette, lightModePalette } from "./palette/palette";
import { spacing } from "./spacing/spacing";
import { transitions } from "./transition/transition";
import { typography } from "./typography/typography";
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
