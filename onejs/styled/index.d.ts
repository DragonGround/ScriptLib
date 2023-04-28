import { h } from "preact";
declare const styled: {
    (Tag: keyof h.JSX.IntrinsicElements | ((props?: any) => h.JSX.Element)): {
        (strings: TemplateStringsArray, ...values: any[]): (props: any, ref: any) => h.JSX.Element;
        attrs(func: (props: any) => ({})): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
    };
    div: {
        (strings: TemplateStringsArray, ...values: any[]): (props: any, ref: any) => h.JSX.Element;
        attrs(func: (props: any) => ({})): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
    };
    button: {
        (strings: TemplateStringsArray, ...values: any[]): (props: any, ref: any) => h.JSX.Element;
        attrs(func: (props: any) => ({})): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
    };
    textfield: {
        (strings: TemplateStringsArray, ...values: any[]): (props: any, ref: any) => h.JSX.Element;
        attrs(func: (props: any) => ({})): (strings: TemplateStringsArray, ...values: any[]) => (props: any) => h.JSX.Element;
    };
};
export { styled as default };
export declare const uss: (strings: TemplateStringsArray, ...values: any[]) => (props: any) => string;
export declare const emo: (strings: TemplateStringsArray, ...values: any[]) => string;
