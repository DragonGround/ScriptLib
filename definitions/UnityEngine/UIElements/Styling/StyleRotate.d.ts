

declare module "UnityEngine/UIElements" {

    export enum AngleUnit {
        Degree,
        Gradian,
        Radian,
        Turn,
    }

    export class Angle {
        static Degrees(v: number): Angle
        static Gradians(v: number): Angle
        static Radians(v: number): Angle
        static Turns(v: number): Angle

        value: number
        unit: AngleUnit

        constructor(v: number)
        constructor(v: number, u: AngleUnit)

        ToDegrees(): number
        ToGradians(): number
        ToRadians(): number
        ToTurns(): number

        ToString(): string
    }

    export class Rotate {
        static None(): Rotate
        
        angle: Angle

        constructor(angle: Angle)
    }

    export class StyleRotate implements IStyleValue<Rotate> {
        value: Rotate
        keyword: StyleKeyword

        constructor(v: Rotate)
        constructor(k: StyleKeyword)
    }
}