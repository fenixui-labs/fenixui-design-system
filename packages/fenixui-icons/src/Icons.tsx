import React from "react";

const Icons = {
    Arrowdown: () => <polyline points="6 9 12 15 18 9" />,
    Checkmark: () => <polyline points="20 6 9 17 4 12" />,
} as const

export type IconNames = keyof typeof Icons;

export default Icons
