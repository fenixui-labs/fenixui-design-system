import ArrowDown from "./icons/ArrowDown";
import Checkmark from "./icons/Checkmark";
import React from "react";

const Icons = {
	ArrowDown,
	Checkmark,
} as const;

export type IconNames = keyof typeof Icons;

export default Icons;
