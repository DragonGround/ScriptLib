const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin")

let theme = rem2px(defaultTheme)
theme.extend = {
    transitionTimingFunction: {
        DEFAULT: "ease-in-out",
        "in-out": "ease-in-out"
    }
}
exports.theme = theme

exports.paths = ["./ScriptLib/onejs/comps/**/*.js"]

exports.plugins = [
    plugin(function ({ addUtilities, matchUtilities, addBase, theme }) {
        addUtilities({
            ".bg-crop": {
                "-unity-background-scale-mode": "scale-and-crop",
            },
            ".bg-fit": {
                "-unity-background-scale-mode": "scale-to-fit",
            },
            ".bg-fill": {
                "-unity-background-scale-mode": "scale-to-fill",
            },
            ".font-normal": {
                "-unity-font-style": "normal",
            },
            ".bold": {
                "-unity-font-style": "bold",
            },
            ".italic": {
                "-unity-font-style": "italic",
            },
            ".bold-italic": {
                "-unity-font-style": "bold-and-italic",
            },
            ".text-center": {
                "-unity-text-align": "middle-center",
            },
            ".inset-0": {
                top: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px"
            }
        })

        matchUtilities(
            {
                transition: (value) => ({
                    "transition-property": value,
                }),
                scale: (value) => ({
                    "scale": value
                }),
                translate: (value) => ({
                    "translate": value,
                }),
                "translate-x": (value) => ({
                    "translate": `${value} 0`,
                }),
                "translate-y": (value) => ({
                    "translate": `0 ${value}`,
                }),
                rotate: (value) => ({
                    "rotate": value,
                }),
            },
            {
                values: {
                    ...theme('scale'),
                    ...theme('translate'),
                    ...theme('translate-x'),
                    ...theme('translate-y'),
                    ...theme('rotate'),
                },
            }
        )
    })
]

exports.corePlugins = {
    // USS cannot support dynamic custom properties within rgb()
    // which is what is used by Tailwind for opacity scales 
    transitionProperty: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false,
    translate: false,
    rotate: false,
    scale: false,
    inset: false,
}

/**
 * Utilities
 */

function rem2px(input, fontSize = 16) { // rem is not supported in USS
    if (input == null) {
        return input
    }
    switch (typeof input) {
        case 'object':
            if (Array.isArray(input)) {
                return input.map((val) => rem2px(val, fontSize))
            }
            const ret = {}
            for (const key in input) {
                ret[key] = rem2px(input[key], fontSize)
            }
            return ret;
        case 'string':
            return input.replace(
                /(\d*\.?\d+)rem$/,
                (_, val) => `${parseFloat(val) * fontSize}px`,
            )
        case 'function':
            return eval(input.toString().replace(
                /(\d*\.?\d+)rem/g,
                (_, val) => `${parseFloat(val) * fontSize}px`,
            ))
        default:
            return input
    }
}