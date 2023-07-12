

declare module "Unity/Jobs" {
    import { NativeArray, NativeSlice } from "Unity/Collections"

    export class JobHandle {
        static CompleteAll(job0: JobHandle, job1: JobHandle): void
        static CompleteAll(job0: JobHandle, job1: JobHandle, job2: JobHandle): void
        static CompleteAll(jobs: NativeArray<JobHandle>): void
        static ScheduleBatchedJobs(): void
        static CombineDependencies(job0: JobHandle, job1: JobHandle): JobHandle
        static CombineDependencies(job0: JobHandle, job1: JobHandle, job2: JobHandle): JobHandle
        static CombineDependencies(jobs: NativeArray<JobHandle>): JobHandle
        static CombineDependencies(jobs: NativeSlice<JobHandle>): JobHandle
        static CheckFenceIsDependencyOrDidSyncFence(jobHandle: JobHandle, dependsOn: JobHandle): boolean
        IsCompleted: boolean
        Complete(): void
    }

    export class IJobParallelFor {
        Execute(index: number): void
    }
}