

declare module "UnityEngine/UIElements" {

    export class TransformOrigin {
        static Initial(): TransformOrigin

        x: Length
        y: Length
        z: number
        
        constructor(x: Length, y: Length, z: number)
    }

    export class StyleTransformOrigin implements IStyleValue<TransformOrigin> {
        value: TransformOrigin
        keyword: StyleKeyword

        constructor(v: TransformOrigin)
        constructor(k: StyleKeyword)
    }
}