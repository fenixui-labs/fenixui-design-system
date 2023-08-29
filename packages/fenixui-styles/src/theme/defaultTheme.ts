import { defaultPalette } from "./defaultPalette";
import { ThemeVariantsProps } from "./theme";
import { createTheme } from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";
import { darken, lighten } from "polished";

const muiTheme = (mode: ThemeVariantsProps) => {
	return createTheme({
		typography: {
			fontFamily: "Raleway, Open Sans, sans-serif",
		},
		palette: {
			primary: {
				light: lighten(0.7, defaultPalette.purple[0]),
				main: defaultPalette.purple[0],
				dark: defaultPalette.purple[5],
				contrastText: "#FFFFFF",
			},
			secondary: {
				light: lighten(0.1, defaultPalette.rose[0]),
				main: defaultPalette.rose[0],
				dark: defaultPalette.rose[5],
				contrastText: "#FFFFFF",
			},
			neutral: {},
			error: {
				light: lighten(0.1, red[400]),
				main: red[400],
				dark: darken(0.1, red[400]),
				contrastText: "#FFFFFF",
			},
			warning: {
				light: lighten(0.1, orange[400]),
				main: orange[500],
				dark: darken(0.1, orange[400]),
				contrastText: "#000000",
			},
			info: {
				light: lighten(0.1, blue[400]),
				main: blue[500],
				dark: darken(0.1, blue[400]),
				contrastText: "#FFFFFF",
			},
			success: {
				light: lighten(0.1, green[400]),
				main: green[500],
				dark: darken(0.1, green[400]),
				contrastText: "#FFFFFF",
			},
			grey: {
				50: lighten(0.2, "#eeeeee"),
				100: lighten(0.1, "#eeeeee"),
				200: "#eeeeee",
				300: "#e0e0e0",
				400: "#bdbdbd",
				500: "#9e9e9e",
				600: "#757575",
				700: "#616161",
				800: darken(0.1, "#616161"),
				900: darken(0.2, "#616161"),
				A100: "#d5d5d5",
				A200: "#aaaaaa",
				A400: "#303030",
				A700: "#616161",
			},
			text: {
				primary: lighten(0.87, "#000000"),
				secondary: lighten(0.54, "#000000"),
				disabled: lighten(0.38, "#000000"),
			},
			action: {
				active: lighten(0.54, "#000000"),
				hover: lighten(0.04, "#000000"),
				hoverOpacity: 0.04,
				selected: lighten(0.8, "#000000"),
				selectedOpacity: 0.08,
				disabled: lighten(0.26, "#000000"),
				disabledBackground: lighten(0.12, "#000000"),
				disabledOpacity: 0.38,
				focus: lighten(0.12, "#000000"),
				focusOpacity: 0.12,
				activatedOpacity: 0.12,
			},
		},
	});
};

export default muiTheme;
