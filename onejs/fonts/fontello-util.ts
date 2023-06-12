
const fontname = "fontawesome" // <-- change this to the font you want to use

const jsonData = require(`onejs/fonts/${fontname}.json`)

let str = "{\n"
for (let item of jsonData.glyphs) {
    str += `    "${item.css}": ${item.code},\n`
}
str += "}"

importNamespace("System.IO").File.WriteAllText(__dirname + `/${fontname}.json`, str)