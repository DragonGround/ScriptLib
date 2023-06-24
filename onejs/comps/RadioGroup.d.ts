import { h } from "preact";
import { Style } from "preact/jsx";
export interface RadioGroupProps {
    class?: string;
    style?: Style;
    children?: any;
    index?: number;
    onChange?: (index: number) => void;
}
export declare const RadioGroup: {
    ({ class: classProp, children, index, onChange, style }: RadioGroupProps): h.JSX.Element;
    Option({ class: classProp, index, children, style }: RadioGroupOptionProps): h.JSX.Element;
};
export interface RadioGroupOptionProps {
    class?: string | Function;
    children?: any;
    style?: Style;
    index: number;
}
export interface RadioToggleProps {
    class?: string;
    style?: Style;
    items: {
        label: string;
        value: any;
    }[];
    index?: number;
    onChange?: (value: any) => void;
}
export declare const RadioToggle: ({ class: classProp, items, index, onChange, style }: RadioToggleProps) => h.JSX.Element;
