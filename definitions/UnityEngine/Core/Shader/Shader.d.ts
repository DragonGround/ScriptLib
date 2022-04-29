declare module "UnityEngine" {
    export class Shader extends Object {
        static Find(name: string): Shader

        maximumLOD: number;
        isSupported: boolean;
        // keywordSpace: LocalKeywordSpace;
        renderQueue: number;
        passCount: number;
        subshaderCount: number;
    }
}