declare module "UnityEngine/UIElements" {
    export enum BackgroundSizeType {
        Length,
        Cover,
        Contain,
    }

    export class BackgroundSize {
        sizeType: BackgroundSizeType
        x: Length
        y: Length
        constructor(sizeX: Length, sizeY: Length)
        constructor(sizeType: BackgroundSizeType)
    }

    export class StyleBackgroundSize implements IStyleValue<BackgroundSize> {
        value: BackgroundSize
        keyword: StyleKeyword
        constructor(v: BackgroundSize)
        constructor(keyword: StyleKeyword)
    }
}