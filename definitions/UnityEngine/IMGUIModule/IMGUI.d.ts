declare module "IMGUI" {
    export enum EventModifiers {
        None,
        Shift,
        Control,
        Alt,
        Command,
        Numeric,
        CapsLock,
        FunctionKey,
    }

}

declare module "UnityEngine" {
    export enum ScaleMode {
        StretchToFill,
        ScaleAndCrop,
        ScaleToFit,
    }
}