import { Vector2, Vector3 } from "UnityEngine"

declare module "UnityEngine/UIElements" {

    export enum SliderDirection {
        Horizontal,
        Vertical,
    }

    export enum ScrollViewMode {
        Vertical,
        Horizontal,
        VerticalAndHorizontal,
    }

    export enum ScrollerVisibility {
        Auto,
        AlwaysVisible,
        Hidden,
    }

    export class Scroller extends VisualElement {
        static ussClassName: string
        static horizontalVariantUssClassName: string
        static verticalVariantUssClassName: string
        static sliderUssClassName: string
        static lowButtonUssClassName: string
        static highButtonUssClassName: string
        slider: Slider
        lowButton: RepeatButton
        highButton: RepeatButton
        value: number
        lowValue: number
        highValue: number
        direction: SliderDirection
        add_valueChanged(handler: (scrollTop: number) => void): void
        remove_valueChanged(handler: any)
        constructor()
        constructor(lowValue: number, highValue: number, valueChanged: (n: number) => void, direction: SliderDirection)
        Adjust(factor: number): void
        ScrollPageUp(): void
        ScrollPageDown(): void
        ScrollPageUp(factor: number): void
        ScrollPageDown(factor: number): void
    }

    export enum TouchScrollBehavior {
        Unrestricted,
        Elastic,
        Clamped,
    }

    export enum ScrollView_NestedInteractionKind {
        Default,
        StopScrolling,
        ForwardScrolling,
    }

    export class ScrollView extends VisualElement {
        static ussClassName: string
        static viewportUssClassName: string
        static horizontalVariantViewportUssClassName: string
        static verticalVariantViewportUssClassName: string
        static verticalHorizontalVariantViewportUssClassName: string
        static contentAndVerticalScrollUssClassName: string
        static contentUssClassName: string
        static horizontalVariantContentUssClassName: string
        static verticalVariantContentUssClassName: string
        static verticalHorizontalVariantContentUssClassName: string
        static hScrollerUssClassName: string
        static vScrollerUssClassName: string
        static horizontalVariantUssClassName: string
        static verticalVariantUssClassName: string
        static verticalHorizontalVariantUssClassName: string
        static scrollVariantUssClassName: string
        horizontalScrollerVisibility: ScrollerVisibility
        verticalScrollerVisibility: ScrollerVisibility
        scrollOffset: Vector2
        horizontalPageSize: number
        verticalPageSize: number
        scrollDecelerationRate: number
        elasticity: number
        touchScrollBehavior: TouchScrollBehavior
        nestedInteractionKind: ScrollView_NestedInteractionKind
        contentViewport: VisualElement
        horizontalScroller: Scroller
        verticalScroller: Scroller
        contentContainer: VisualElement
        mode: ScrollViewMode
        constructor()
        constructor(scrollViewMode: ScrollViewMode)
        ScrollTo(child: VisualElement): void
    }

    export class BaseSlider<TValueType> extends BaseField<TValueType> implements IValueField<TValueType> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static horizontalVariantUssClassName: string
        static verticalVariantUssClassName: string
        static dragContainerUssClassName: string
        static trackerUssClassName: string
        static draggerUssClassName: string
        static draggerBorderUssClassName: string
        static textFieldClassName: string
        lowValue: TValueType
        highValue: TValueType
        range: TValueType
        pageSize: number
        showInputField: boolean
        value: TValueType
        direction: SliderDirection
        inverted: boolean
        ApplyInputDeviceDelta(delta: Vector3, speed: DeltaSpeed, startValue: TValueType): void
        SetValueWithoutNotify(newValue: TValueType): void
        AdjustDragElement(factor: number): void
        StartDragging(): void
        StopDragging(): void
    }

    export class Slider extends BaseSlider<number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        constructor()
        constructor(start: number, end: number, direction: SliderDirection, pageSize: number)
        constructor(label: string, start: number, end: number, direction: SliderDirection, pageSize: number)
        ApplyInputDeviceDelta(delta: Vector3, speed: DeltaSpeed, startValue: number): void
    }

    export class SliderInt extends BaseSlider<number> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        pageSize: number
        constructor()
        constructor(start: number, end: number, direction: SliderDirection, pageSize: number)
        constructor(label: string, start: number, end: number, direction: SliderDirection, pageSize: number)
        ApplyInputDeviceDelta(delta: Vector3, speed: DeltaSpeed, startValue: number): void
    }
}