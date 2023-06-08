import { h } from "preact";
import { Style } from "preact/jsx";
export interface SwitchProps {
    class?: string;
    children?: any;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    style?: Style;
}
export declare const Switch: ({ class: classProp, children, checked, onChange, style }: SwitchProps) => h.JSX.Element;
export interface ToggleProps extends SwitchProps {
    class?: string;
    children?: any;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    style?: Style;
}
export declare const Toggle: ({ class: classProp, children, checked, onChange, style }: ToggleProps) => h.JSX.Element;
export declare const DiamondToggle: ({ class: classProp, children, checked, onChange, style }: ToggleProps) => h.JSX.Element;
