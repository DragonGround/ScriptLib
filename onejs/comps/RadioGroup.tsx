import { Dom } from "OneJS/Dom"
import { h, Fragment, createContext } from "preact"
import { useContext, useEffect, useRef, useState } from "preact/hooks"
import { Style } from "preact/jsx"
import { FAIcon } from "onejs/fonts/fontawesome"

export interface RadioGroupProps {
    class?: string
    style?: Style
    children?: any
    index?: number
    onChange?: (index: number) => void
}

const RadioGroupContext = createContext({} as any)

export const RadioGroup = ({ class: classProp, children, index, onChange, style }: RadioGroupProps) => {
    const [selectedIndex, setSelectedIndex] = useState(index || 0)

    useEffect(() => {
        onChange && onChange(selectedIndex)
    }, [selectedIndex])

    return <RadioGroupContext.Provider value={{ selectedIndex, setSelectedIndex }}>
        <div class={`${classProp}`} style={style}>{children}</div>
    </RadioGroupContext.Provider>
}

export interface RadioGroupOptionProps {
    class?: string | Function
    children?: any
    style?: Style
    index: number
}

RadioGroup.Option = ({ class: classProp, index, children, style }: RadioGroupOptionProps) => {
    const { selectedIndex, setSelectedIndex } = useContext(RadioGroupContext)

    function onClick() {
        setSelectedIndex(index)
    }

    return <div key={`${index}`} class={typeof classProp === "function" ? classProp({ checked: selectedIndex == index }) : classProp} onClick={onClick} style={style}>
        {typeof children === "function" ? children({ checked: selectedIndex == index }) : children}
    </div>
}

export interface RadioToggleProps {
    class?: string
    style?: Style
    items: { label: string, value: any }[]
    index?: number
    onChange?: (value: any) => void
}

export const RadioToggle = ({ class: classProp, items, index, onChange, style }: RadioToggleProps) => {
    index = index || 0

    function onChangeIndex(index: number) {
        onChange && onChange(items[index].value)
    }

    return <RadioGroup class={`flex flex-row rounded-md overflow-hidden bg-white/50 ${classProp}`} index={index} onChange={onChangeIndex}>
        {items.map((item, i) => (
            <RadioGroup.Option class={({ checked }) => `${checked ? "bg-white/70" : "bg-white/0"} p-2 transition-[background-color] duration-200`} index={i}>
                {({ checked }) => <Fragment>{item.label}</Fragment>}
            </RadioGroup.Option>
        ))}
    </RadioGroup>
}