import * as t from "io-ts";

export const ColorTone = t.type({
	darker: t.string,
	dark: t.string,
	light: t.string,
	lighter: t.string,
});

export const ColorTones = t.record(t.string, ColorTone);

export const Palette = t.record(t.string, ColorTones);
