declare module "UnityEngine/UIElements" {
    export enum BackgroundPositionKeyword {
        Center,
        Top,
        Bottom,
        Left,
        Right,
    }

    export class BackgroundPosition {
        keyword: BackgroundPositionKeyword
        offset: Length
        constructor(keyword: BackgroundPositionKeyword)
        constructor(keyword: BackgroundPositionKeyword, offset: Length)
    }

    export class StyleBackgroundPosition implements IStyleValue<BackgroundPosition> {
        value: BackgroundPosition
        keyword: StyleKeyword
        constructor(v: BackgroundPosition)
        constructor(keyword: StyleKeyword)
    }
}