import { h } from "preact"
import { Style } from "preact/jsx"

const jsonData = require("./fontawesome.json")
const fontDef = resource.loadFontDefinition(__dirname + "/fontawesome.ttf")

export interface FontAwesomeProps {
    class?: string
    style?: Style
    name: string
}

export const FAIcon = ({ class: classProp, name, style }: FontAwesomeProps) => {
    let id = jsonData[name]
    classProp = classProp || ""

    return <div class={`${classProp}`} style={{ ...style, unityFontDefinition: fontDef }}>{String.fromCodePoint(id)}</div>
}