import React from "react";
import ArrowDown from "./icons/ArrowDown";
import Checkmark from "./icons/Checkmark";

const Icons = {
    ArrowDown,
    Checkmark
} as const

export type IconNames = keyof typeof Icons;

export default Icons
