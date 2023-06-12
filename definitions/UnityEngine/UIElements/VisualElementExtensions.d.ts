

declare module "UnityEngine/UIElements" {
    import { Rect } from "UnityEngine"

    interface VisualElement {
        WorldToLocal(r: Rect): Rect
        LocalToWorld(r: Rect): Rect
    }
}