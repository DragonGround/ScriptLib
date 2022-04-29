

declare module "UnityEngine/UIElements" {

    export class Translate {
        static None(): Translate

        x: Length
        y: Length
        z: number
        
        constructor(x: Length, y: Length, z: number)
    }

    export class StyleTranslate implements IStyleValue<Translate> {
        value: Translate
        keyword: StyleKeyword

        constructor(v: Translate)
        constructor(k: StyleKeyword)
    }
}