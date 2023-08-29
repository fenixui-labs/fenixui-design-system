import { ThemeVariantsProps } from "./theme";
import { createTheme } from "@mui/material";
import { darken, lighten } from "polished";

const muiTheme = (mode: ThemeVariantsProps) => {
	return createTheme({
		typography: {},
		palette: {
			primary: {
				light: lighten(0.7, ""),
				main: "",
				dark: "",
				contrastText: "#FFFFFF",
			},
			secondary: {
				light: lighten(0.1, ""),
				main: "",
				dark: "",
				contrastText: "#FFFFFF",
			},
			neutral: {},
			error: {
				light: lighten(0.1, ""),
				main: "",
				dark: darken(0.1, ""),
				contrastText: "#FFFFFF",
			},
			warning: {
				light: lighten(0.1, ""),
				main: "",
				dark: darken(0.1, ""),
				contrastText: "#000000",
			},
			info: {
				light: lighten(0.1, ""),
				main: "",
				dark: darken(0.1, ""),
				contrastText: "#FFFFFF",
			},
			success: {
				light: lighten(0.1, ""),
				main: "",
				dark: darken(0.1, ""),
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
