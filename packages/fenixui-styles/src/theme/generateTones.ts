import { darken, lighten } from "polished";
import * as R from "ramda";

const generateTone =
	(toneFn: (color: string) => string) => (baseColor: string) =>
		toneFn(baseColor);

export const generateTones = (baseColor: string) => ({
	darker: generateTone(darken(0.2))(baseColor),
	dark: generateTone(darken(0.1))(baseColor),
	light: generateTone(lighten(0.1))(baseColor),
	lighter: generateTone(lighten(0.2))(baseColor),
});

export const generatePaletteTones = (
	palette: Record<string, Record<string, string>>,
) =>
	R.mapObjIndexed((shades) => R.mapObjIndexed(generateTones, shades), palette);
