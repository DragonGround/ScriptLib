import { h } from "preact"
import { Style } from "preact/jsx"
import jsonData from "./fontawesome.json"

// const jsonData = require("./fontawesome.json")
const fontDef = resource.loadFontDefinition(__dirname + "/fontawesome.ttf")

export interface FontAwesomeProps {
    class?: string
    style?: Style
    name: keyof typeof jsonData
}

export const FAIcon = ({ class: classProp, name, style }: FontAwesomeProps) => {
    let id = jsonData[name]
    classProp = classProp || ""

    return <div class={`${classProp}`} style={{ ...style, unityFontDefinition: fontDef }}>{String.fromCodePoint(id)}</div>
}