import { h } from "preact";
import { Style } from "preact/jsx";
export interface FontAwesomeProps {
    class?: string;
    style?: Style;
    name: string;
}
export declare const FAIcon: ({ class: classProp, name, style }: FontAwesomeProps) => h.JSX.Element;
