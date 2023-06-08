import { h } from "preact"
import { Style } from "preact/jsx"

export interface SwitchProps {
    class?: string
    children?: any
    checked?: boolean
    onChange?: (checked: boolean) => void
    style?: Style
}

export const Switch = ({ class: classProp, children, checked, onChange, style }: SwitchProps) => {

    function onClick() {
        onChange && onChange(!checked)
    }

    return <div class={`${classProp}`} onClick={onClick} style={style}>
        {typeof children === "function" ? children({ checked }) : children}
    </div>
}

export interface ToggleProps extends SwitchProps {
    class?: string
    children?: any
    checked?: boolean
    onChange?: (checked: boolean) => void
    style?: Style
}

export const Toggle = ({ class: classProp, children, checked, onChange, style }: ToggleProps) => {

    return <Switch class={`w-16 h-8 rounded-[16px] p-[2px] ${checked ? 'bg-[rgba(0_0_0_0.8)]' : 'bg-[rgba(0_0_0_0.5)]'} transition-[background-color] duration-200 ${classProp}`} checked={checked} onChange={onChange} style={style}>
        {({ checked }) => (
            <div class={`w-[28px] h-[28px] bg-white rounded-full ${checked ? 'translate-x-[32px]' : 'translate-x-0'} transition-[translate] duration-200`} onClick={() => onChange && onChange(!checked)} />
        )}
    </Switch>
}

export const DiamondToggle = ({ class: classProp, children, checked, onChange, style }: ToggleProps) => {

    return <Switch class={`w-8 h-8 p-[6px] border-[1px] ${checked ? 'border-[rgba(255_255_255_0.8)] bg-[rgba(0_0_0_0.5)] rotate-[45deg]' : 'border-[rgba(255_255_255_0.5)] bg-[rgba(0_0_0_0.8)] rotate-0'} transition-[background-color,translate] duration-200 ${classProp}`} checked={checked} onChange={onChange} style={style}>
        {({ checked }) => (
            <div class={`w-[18px] h-[18px] bg-white ${checked ? 'flex' : 'hidden'}`} onClick={() => onChange && onChange(!checked)} />
        )}
    </Switch>
}