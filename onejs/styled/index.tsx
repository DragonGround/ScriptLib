import flatten from "css-flatten"
import { h } from "preact"
import generateComponentId from "./utils/generateComponentId"
import { forwardRef } from "preact/compact"

function _hashAndAddRuntimeUSS(style: string) {
    let compId = generateComponentId(style)
    style = `.${compId} {${style}}`
    style = flatten(style)
    document.addRuntimeUSS(style)

    return compId
}

function _processTemplate(props, strings: TemplateStringsArray, values: any[]) {
    // ref: https://medium.com/styled-components/how-styled-components-works-618a69970421
    let style = values.reduce((result, expr, index) => {
        let value = typeof expr === "function" ? expr(props) : expr
        if (typeof value === "function")
            value = value(props)

        return result + (value ? value : "") + strings[index + 1]
    }, strings[0])
    return style as string
}

const styled = (Tag: string | ((props?) => h.JSX.Element)) => {

    const tag = function (strings: TemplateStringsArray, ...values) {
        return forwardRef((props, ref) => {
            let style = _processTemplate(props, strings, values)
            let compId = _hashAndAddRuntimeUSS(style)

            return <Tag ref={ref} class={compId} {...props}></Tag>
        })
    }

    tag.attrs = (func: (props: any) => ({})) => {
        return function (strings: TemplateStringsArray, ...values) {
            return (props) => {
                let defaultProps = func(props)
                let condensedProps = Object.assign({}, defaultProps, props)
                let style = _processTemplate(condensedProps, strings, values)
                let compId = _hashAndAddRuntimeUSS(style)

                return <Tag class={compId} {...condensedProps}></Tag>
            }
        }
    }

    return tag
}

styled.div = styled("div")
styled.button = styled("button")
styled.textfield = styled("textfield")

export { styled as default }

export const uss = function (strings: TemplateStringsArray, ...values) {
    return (props) => {
        return _processTemplate(props, strings, values)
    }
}

export const emo = function (strings: TemplateStringsArray, ...values) {
    let style = values.reduce((result, expr, index) => {
        const value = expr
        return result + (value ? value : "") + strings[index + 1]
    }, strings[0])

    return _hashAndAddRuntimeUSS(style)
}