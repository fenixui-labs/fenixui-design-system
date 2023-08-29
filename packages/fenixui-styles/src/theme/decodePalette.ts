import { Palette } from "./types";
import * as E from "fp-ts/Either";
import * as t from "io-ts";

export type FenixPalette = t.TypeOf<typeof Palette>;

export const decodePalette = (
	input: FenixPalette,
): E.Either<string, FenixPalette> => Palette.decode(input);
