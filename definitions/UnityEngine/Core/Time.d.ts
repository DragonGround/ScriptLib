
declare module "UnityEngine" {

    export class Time {
        static time: number
        static timeAsDouble: number
        static timeSinceLevelLoad: number
        static timeSinceLevelLoadAsDouble: number
        static deltaTime: number
        static fixedTime: number
        static fixedTimeAsDouble: number
        static unscaledTime: number
        static unscaledTimeAsDouble: number
        static fixedUnscaledTime: number
        static fixedUnscaledTimeAsDouble: number
        static unscaledDeltaTime: number
        static fixedUnscaledDeltaTime: number
        static fixedDeltaTime: number
        static maximumDeltaTime: number
        static smoothDeltaTime: number
        static maximumParticleDeltaTime: number
        static timeScale: number
        static frameCount: number
        static renderedFrameCount: number
        static realtimeSinceStartup: number
        static realtimeSinceStartupAsDouble: number
        static captureDeltaTime: number
        static captureFramerate: number
        static inFixedTimeStep: boolean
    }
}