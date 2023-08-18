declare module "UnityEngine/TextCore" {
    export class FaceInfo {
        familyName: string
        styleName: string
        pointSize: number
        scale: number
        lineHeight: number
        ascentLine: number
        capLine: number
        meanLine: number
        baseline: number
        descentLine: number
        superscriptOffset: number
        superscriptSize: number
        subscriptOffset: number
        subscriptSize: number
        underlineOffset: number
        underlineThickness: number
        strikethroughOffset: number
        strikethroughThickness: number
        tabWidth: number
        Compare(other: FaceInfo): boolean
    }
}