declare module "UnityEngine/UIElements" {
    export enum Repeat {
        NoRepeat,
        Space,
        Round,
        Repeat,
    }

    export class BackgroundRepeat {
        x: Repeat
        y: Repeat
        constructor(repeatX: Repeat, repeatY: Repeat)
    }

    export class StyleBackgroundRepeat implements IStyleValue<BackgroundRepeat> {
        value: BackgroundRepeat
        keyword: StyleKeyword
        constructor(v: BackgroundRepeat)
        constructor(keyword: StyleKeyword)
    }
}