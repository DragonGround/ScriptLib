import { h } from "preact";
declare function styled<T extends keyof h.JSX.IntrinsicElements>(Tag: T | ((props?: any) => h.JSX.Element)): {
    (strings: TemplateStringsArray, ...values: any[]): (props: h.JSX.IntrinsicElements[T], ref: any) => h.JSX.Element;
    attrs(func: (props: any) => ({})): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
};
declare namespace styled {
    var div: {
        (strings: TemplateStringsArray, ...values: any[]): (props: h.JSX.VisualElement, ref: any) => h.JSX.Element;
        attrs(func: (props: any) => {}): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
    };
    var button: {
        (strings: TemplateStringsArray, ...values: any[]): (props: h.JSX.Button, ref: any) => h.JSX.Element;
        attrs(func: (props: any) => {}): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
    };
    var textfield: {
        (strings: TemplateStringsArray, ...values: any[]): (props: h.JSX.TextField, ref: any) => h.JSX.Element;
        attrs(func: (props: any) => {}): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
    };
}
export { styled as default };
export declare const uss: (strings: TemplateStringsArray, ...values: any[]) => (props: any) => string;
export declare const emo: (strings: TemplateStringsArray, ...values: any[]) => string;
export declare type CompType<T> = (props: h.JSX.Button | T, ref: any) => h.JSX.Element;
