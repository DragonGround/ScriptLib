import { h } from "preact";
import { Style } from "preact/jsx";
export declare type SliderProps = {
    class?: string;
    style?: Style;
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
};
export declare const Slider: ({ class: classProp, style, value, onChange, min: _min, max: _max }: SliderProps) => h.JSX.Element;
