import React from "react"

import { IconNames } from "./Icons"

type IconProperties = {
    className?: string
    viewBox?: string
    title?: string
    style?: React.CSSProperties
    role?: string
    size?: '16' | '24' | '32' | '40'
    name: IconNames
}

const Icon: React.FC<IconProperties> = ({ viewBox, title, size, name, ...props }) => {
    const IconComponent = require(`./icons/${name}`).default
    
    return (
        <svg width={size} height={size} viewBox={viewBox} {...props}>
            {title &&
                <title>{title}</title>
            }
            <IconComponent />
        </svg>
    )
}

Icon.defaultProps = {
    viewBox: "0 0 24 24",
    size: "24",
    role: "img",
}

export default Icon