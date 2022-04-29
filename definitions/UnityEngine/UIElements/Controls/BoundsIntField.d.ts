


declare module "UnityEngine/UIElements" {
    import { BoundsInt } from "UnityEngine"
    import { ITransitionAnimations } from "UnityEngine.UIElements.Experimental"

    export class BoundsIntField extends BaseField<BoundsInt> implements IEventHandler, IBindable, IExperimentalFeatures, IResolvedStyle, IStylePropertyAnimations, ITransform, ITransitionAnimations, IMixedValueSupport, INotifyValueChanged<BoundsInt>, IVisualElementScheduler {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static positionUssClassName: string
        static sizeUssClassName: string
        constructor()
        constructor(label: string)
        SetValueWithoutNotify(newValue: BoundsInt): void
    }
}