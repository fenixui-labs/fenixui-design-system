import { TransitionsOptions } from "@mui/material";

declare module "@mui/material/styles" {
	interface Easing {
		customAnimation: string;
	}
}

export const transitions: TransitionsOptions = {
	duration: {
		shortest: 150,
		shorter: 200,
		short: 250,
		// most basic recommended timing
		standard: 300,
		// this is to be used in complex animations
		complex: 375,
		// recommended when something is entering screen
		enteringScreen: 225,
		// recommended when something is leaving screen
		leavingScreen: 195,
	},
	easing: {
		// This is the most common easing curve.
		easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
		// Objects enter the screen at full velocity from off-screen and
		// slowly decelerate to a resting point.
		easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
		// Objects leave the screen at full velocity. They do not decelerate when off-screen.
		easeIn: "cubic-bezier(0.4, 0, 1, 1)",
		// The sharp curve is used by objects that may return to the screen at any time.
		sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
		// custom animation
		customAnimation: "cubic-bezier(0.4, 0, 1, 1)",
	},
};
