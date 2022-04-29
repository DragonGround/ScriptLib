declare module "UnityEngine" {
    import { Type } from "System"
    import { float3, quaternion } from "Unity/Mathematics"
    import { Object as DotNetObj } from "System"

    export enum PrimitiveType {
        Sphere,
        Capsule,
        Cylinder,
        Cube,
        Plane,
        Quad,
    }

    export class Behaviour extends Component {

    }

    export class MonoBehaviour extends Behaviour {

    }

    export class Transform extends Component {
        position: float3
        rotation: quaternion
        localScale: float3
        parent: Transform
    }

    export enum FontStyle {
        Normal,
        Bold,
        Italic,
        BoldAndItalic,
    }

    export class Mesh {
        vertices: float3[]
        triangles: number[]
    }

    export class MeshFilter extends Component {
        mesh: Mesh
        sharedMesh: Mesh
    }

    export class MeshRenderer extends Component {
        sharedMaterial: Material
    }

    export class Random {
        static rotation: quaternion

        /**
         * [minInclusive..maxExclusive]
         */
        static Range(a: number, b: number): number
    }
}