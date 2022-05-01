declare module "UnityEngine" {

    interface RandomState {

    }

    export class Random {
        static state: RandomState
        static value: number
        static insideUnitSphere: Vector3
        static insideUnitCircle: Vector2
        static onUnitSphere: Vector3
        static rotation: Quaternion
        static rotationUniform: Quaternion
        static seed: number
        static InitState(seed: number): void
        static Range(minInclusive: number, maxInclusive: number): number
        static Range(minInclusive: number, maxExclusive: number): number
        static RandomRange(min: number, max: number): number
        static RandomRange(min: number, max: number): number
        static ColorHSV(): Color
        static ColorHSV(hueMin: number, hueMax: number): Color
        static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number): Color
        static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number, valueMin: number, valueMax: number): Color
        static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number, valueMin: number, valueMax: number, alphaMin: number, alphaMax: number): Color
    }
}