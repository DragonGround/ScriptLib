import { h } from "preact";
import { Style } from "preact/jsx";
export interface TabProps {
    name: string;
    index: number;
    class?: string | Function;
    style?: Style;
    children?: any;
}
export interface TabGroupProps {
    class?: string;
    style?: Style;
    children?: any;
    index?: number;
    onChange?: (index: number) => void;
}
export interface TabListProps {
    class?: string;
    style?: Style;
    children?: any;
}
export interface TabPanelsProps {
    class?: string;
    style?: Style;
    children?: any;
}
export interface TabPanelProps {
    class?: string;
    style?: Style;
    children?: any;
}
export declare const Tab: {
    ({ class: classProp, name, index, children, style }: TabProps): h.JSX.Element;
    Group({ class: classProp, children, index, onChange, style }: TabGroupProps): h.JSX.Element;
    List({ class: classProp, children, style }: TabListProps): h.JSX.Element;
    Panels({ class: classProp, children, style }: TabPanelsProps): h.JSX.Element;
    Panel({ class: classProp, children, style }: TabPanelProps): h.JSX.Element;
};
export interface ExampleTabsProps {
    class?: string;
    style?: Style;
}
export declare const ExampleTabs: ({ class: classProp, style }: ExampleTabsProps) => h.JSX.Element;
