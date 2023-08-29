export type { FenixProviderProps } from "./FenixProvider";
export { FenixProvider } from "./FenixProvider";
export { FenixProviderContext } from "./FenixProvider";

export type { FenixCssVarsProviderProps } from "./FenixCssVarsProvider";
export { FenixCssVarsProvider } from "./FenixCssVarsProvider";

/*
import { decodePalette } from './decodePalette';
import { generatePaletteTones } from './generateTones';
import * as E from "fp-ts/Either"
import { defaultPalette } from "./defaultPalette";

const decodedPalette = decodePalette(defaultPalette);

if (E.isRight(decodedPalette)) {
    const polishedTones = generatePaletteTones(decodedPalette.right);
    console.log(polishedTones);
} else {
    console.error('Invalid palette format:', decodedPalette.left);
}
*/
