declare module "UnityEngine/UIElements" {
    import { Color } from "UnityEngine"

    export class StyleEnum<T> implements IStyleValue<T> {
        value: T
        keyword: StyleKeyword

        constructor(c: T)
        constructor(k: StyleKeyword)
    }

    export enum Align {
        Auto,
        FlexStart,
        Center,
        FlexEnd,
        Stretch
    }

    export enum DisplayStyle {
        Flex,
        None
    }

    export enum FlexDirection {
        Column,
        ColumnReverse,
        Row,
        RowReverse
    }

    export enum Wrap {
        NoWrap,
        Wrap,
        WrapReverse
    }

    export enum Justify {
        FlexStart,
        Center,
        FlexEnd,
        SpaceBetween,
        SpaceAround,
    }

    export enum Overflow {
        Visible,
        Hidden,
    }

    export enum Position {
        Relative,
        Absolute,
    }

    export enum TextOverflow {
        Clip,
        Ellipsis,
    }

    export enum OverflowClipBox {
        PaddingBox,
        ContentBox,
    }

    export enum TextAnchor {
        UpperLeft,
        UpperCenter,
        UpperRight,
        MiddleLeft,
        MiddleCenter,
        MiddleRight,
        LowerLeft,
        LowerCenter,
        LowerRight,
    }

    export enum TextOverflowPosition {
        End,
        Start,
        Middle,
    }

    export enum Visibility {
        Visible,
        Hidden,
    }

    export enum WhiteSpace {
        Normal,
        NoWrap,
    }
}