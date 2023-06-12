import { h } from "preact";
import { Style } from "preact/jsx";
export interface ListboxProps {
    class?: string;
    children?: any;
    style?: Style;
    items: any[];
    index?: number;
    onChange?: (item: any) => void;
}
export declare const Listbox: {
    ({ class: classProp, children, items, onChange, index, style }: ListboxProps): h.JSX.Element;
    Button({ class: classProp, children }: ListboxButtonProps): h.JSX.Element;
    Options({ class: classProp, children }: ListboxOptionsProps): h.JSX.Element | null;
    Option({ class: classProp, index, children, item, style }: ListboxOptionProps): h.JSX.Element;
};
export interface ListboxButtonProps {
    class?: string;
    children?: any;
    style?: Style;
}
export interface ListboxOptionsProps {
    class?: string;
    children?: any;
    style?: Style;
}
export interface ListboxOptionProps {
    class?: string;
    children?: any;
    style?: Style;
    index: number;
    item?: any;
}
export interface SelectProps {
    class?: string;
    style?: Style;
    items: any[];
    index?: number;
    onChange?: (item: any) => void;
}
export declare const Select: ({ class: classProp, items, index, onChange, style }: SelectProps) => h.JSX.Element;
