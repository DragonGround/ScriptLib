
declare module "UnityEngine/UIElements" {
    export interface IBinding {
        PreUpdate(): void
        Update(): void
        Release(): void
    }
    
    export class BindableElement extends VisualElement implements IBindable {
        binding: IBinding
        bindingPath: string
        constructor()
    }
}