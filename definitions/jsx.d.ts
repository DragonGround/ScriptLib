


declare module "preact/jsx" {
    import { Enum } from "System"
    import { Ref } from "preact"
    import { Bounds, BoundsInt, Color, Rect, RectInt, Texture, Texture2D, Vector2, Vector2Int, Vector3, Vector3Int, Vector4 } from "UnityEngine"
    import { AttachToPanelEvent, BlurEvent, ClickEvent, InputEvent, FocusEvent, WheelEvent, DetachFromPanelEvent, DragEnterEvent, DragExitedEvent, DragLeaveEvent, DragPerformEvent, DragUpdatedEvent, ExecuteCommandEvent, FocusInEvent, FocusOutEvent, GeometryChangedEvent, KeyDownEvent, KeyUpEvent, MouseCaptureEvent, MouseCaptureOutEvent, MouseDownEvent, MouseEnterEvent, MouseEnterWindowEvent, MouseLeaveEvent, MouseLeaveWindowEvent, MouseMoveEvent, MouseOutEvent, MouseOverEvent, MouseUpEvent, PickingMode, PointerCancelEvent, PointerCaptureEvent, PointerCaptureOutEvent, PointerDownEvent, PointerEnterEvent, PointerLeaveEvent, PointerMoveEvent, PointerOutEvent, PointerOverEvent, PointerStationaryEvent, PointerUpEvent, ScrollViewMode, TooltipEvent, UxmlBoolAttributeDescription, UxmlDoubleAttributeDescription, UxmlFloatAttributeDescription, UxmlIntAttributeDescription, UxmlLongAttributeDescription, UxmlStringAttributeDescription, ValidateCommandEvent, ChangeEvent } from "UnityEngine/UIElements"

    namespace JSXInternal {

        /**
         * Base elements
         */

        export interface VisualElement {
            ref?: Ref<any>

            children?: (string | number | Element) | (string | number | Element)[]

            name?: string
            class?: string
            style?: Style
            tooltip?: string
            focusable?: boolean
            tabindex?: number
            "picking-mode"?: PickingMode
            "view-data-key"?: string

            onPointerCaptureOut?: (e: PointerCaptureOutEvent) => void
            onPointerCapture?: (e: PointerCaptureEvent) => void
            onMouseCaptureOut?: (e: MouseCaptureOutEvent) => void
            onMouseCapture?: (e: MouseCaptureEvent) => void
            onValidateCommand?: (e: ValidateCommandEvent) => void
            onExecuteCommand?: (e: ExecuteCommandEvent) => void
            onDragExited?: (e: DragExitedEvent) => void
            onDragEnter?: (e: DragEnterEvent) => void
            onDragLeave?: (e: DragLeaveEvent) => void
            onDragUpdated?: (e: DragUpdatedEvent) => void
            onDragPerform?: (e: DragPerformEvent) => void
            onFocusOut?: (e: FocusOutEvent) => void
            onBlur?: (e: BlurEvent) => void
            onFocusIn?: (e: FocusInEvent) => void
            onFocus?: (e: FocusEvent) => void
            onInput?: (e: InputEvent) => void
            onKeyDown?: (e: KeyDownEvent) => void
            onKeyUp?: (e: KeyUpEvent) => void
            onGeometryChanged?: (e: GeometryChangedEvent) => void
            onMouseDown?: (e: MouseDownEvent) => void
            onMouseUp?: (e: MouseUpEvent) => void
            onMouseMove?: (e: MouseMoveEvent) => void
            // onContextClick?: (e: ContextClickEvent) => void
            onWheel?: (e: WheelEvent) => void
            onMouseEnter?: (e: MouseEnterEvent) => void
            onMouseLeave?: (e: MouseLeaveEvent) => void
            onMouseEnterWindow?: (e: MouseEnterWindowEvent) => void
            onMouseLeaveWindow?: (e: MouseLeaveWindowEvent) => void
            onMouseOver?: (e: MouseOverEvent) => void
            onMouseOut?: (e: MouseOutEvent) => void
            // onContextualMenuPopulate?: (e: ContextualMenuPopulateEvent) => void
            // onNavigationMove?: (e: NavigationMoveEvent) => void
            // onNavigationTab?: (e: NavigationTabEvent) => void
            // onNavigationCancel?: (e: NavigationCancelEvent) => void
            // onNavigationSubmit?: (e: NavigationSubmitEvent) => void
            onAttachToPanel?: (e: AttachToPanelEvent) => void
            onDetachFromPanel?: (e: DetachFromPanelEvent) => void
            onPointerDown?: (e: PointerDownEvent) => void
            onPointerMove?: (e: PointerMoveEvent) => void
            onPointerStationary?: (e: PointerStationaryEvent) => void
            onPointerUp?: (e: PointerUpEvent) => void
            onPointerCancel?: (e: PointerCancelEvent) => void
            onClick?: (e: ClickEvent) => void
            onPointerEnter?: (e: PointerEnterEvent) => void
            onPointerLeave?: (e: PointerLeaveEvent) => void
            onPointerOver?: (e: PointerOverEvent) => void
            onPointerOut?: (e: PointerOutEvent) => void
            // onCustomStyleResolved?: (e: CustomStyleResolvedEvent) => void
            onTooltip?: (e: TooltipEvent) => void
            // onTransitionRun?: (e: TransitionRunEvent) => void
            // onTransitionStart?: (e: TransitionStartEvent) => void
            // onTransitionEnd?: (e: TransitionEndEvent) => void
            // onTransitionCancel?: (e: TransitionCancelEvent) => void
            // onIMGUI?: (e: IMGUIEvent) => void
        }

        type VisualElementNoChildren = Omit<VisualElement, "children">
        type BindableElementNoChildren = Omit<BindableElement, "children">

        interface BindableElement extends VisualElement {
            "binding-path"?: string
        }

        /**
         * Utilities
         */

        interface Box extends VisualElement {

        }

        interface TextElement extends VisualElementNoChildren {
            text?: string
        }

        interface Label extends TextElement {

        }

        interface Image extends VisualElementNoChildren {
            image?: Texture
        }

        interface IMGUIContainer extends VisualElementNoChildren {

        }

        interface Foldout extends BindableElement {

        }

        /**
         * Templates
         */

        interface Template extends BindableElementNoChildren {
            name?: string
            path?: string
        }

        interface Instance extends BindableElementNoChildren {
            template?: string
        }

        interface TemplateContainer extends BindableElementNoChildren {
            template?: string
        }

        /**
         * Controls
         */

        interface BaseField<T> extends BindableElementNoChildren {
            label?: string
        }

        interface BaseFieldTraits<ValueType, UxmlType> extends BaseField<ValueType> {
            value?: ValueType
            onValueChanged?: (e: ChangeEvent<ValueType>) => void
        }

        interface Button extends TextElement {

        }

        interface RepeatButton extends TextElement {
            delay?: number
            interva?: number
        }

        interface Toggle extends BaseFieldTraits<boolean, UxmlBoolAttributeDescription> {
            text?: string
        }

        interface Scroller extends VisualElementNoChildren {
            "low-value"?: number
            "high-value"?: number
            direction?: "Horizontal" | "Vertical"
            value?: number
        }

        enum SliderDirection {
            Horizontal,
            Vertical
        }

        interface Slider extends BaseFieldTraits<float, UxmlFloatAttributeDescription> {
            "low-value"?: number
            "high-value"?: number
            direction?: SliderDirection
            "page-size"?: number
        }

        interface SliderInt extends BaseFieldTraits<int, UxmlIntAttributeDescription> {
            "low-value"?: number
            "high-value"?: number
            direction?: SliderDirection
            "page-size"?: number
        }

        interface MinMaxSlider extends BaseField<Vector2> {
            "low-limit"?: number
            "high-limit"?: number
            "min-value"?: number
            "max-value"?: number
        }

        interface EnumField extends BaseField<Enum> {
            type?: string
            value?: string
        }

        interface ProgressBar extends BindableElementNoChildren {
            "low-value"?: number
            "high-value"?: number
            value?: number
            title?: string
        }

        /**
         * Text input
         */

        interface TextInputBaseField<TValueType> extends BaseFieldTraits<string, UxmlStringAttributeDescription> {
            text?: string
            "max-length"?: number
            password?: string
            "mask-character"?: string
            readonly?: boolean
        }

        interface TextField extends TextInputBaseField<string> {
            multiline?: boolean
        }

        interface IntegerField extends BaseFieldTraits<number, UxmlIntAttributeDescription> {

        }

        interface LongField extends BaseFieldTraits<number, UxmlLongAttributeDescription> {

        }

        interface FloatField extends BaseFieldTraits<number, UxmlFloatAttributeDescription> {

        }

        interface DoubleField extends BaseFieldTraits<number, UxmlDoubleAttributeDescription> {

        }

        interface Vector2Field extends BaseField<Vector2> {
            x?: number
            y?: number
        }

        interface Vector2IntField extends BaseField<Vector2Int> {
            x?: number
            y?: number
        }

        interface Vector3Field extends BaseField<Vector3> {
            x?: number
            y?: number
            z?: number
        }

        interface Vector3IntField extends BaseField<Vector3Int> {
            x?: number
            y?: number
            z?: number
        }

        interface Vector4Field extends BaseField<Vector4> {
            x?: number
            y?: number
            z?: number
            w?: number
        }

        interface RectField extends BaseField<Rect> {
            x?: number
            y?: number
            w?: number
            h?: number
        }

        interface RectIntField extends BaseField<RectInt> {
            x?: number
            y?: number
            w?: number
            h?: number
        }

        interface BoundsField extends BaseField<Bounds> {
            cx?: number
            cy?: number
            cz?: number
            ex?: number
            ey?: number
            ez?: number
        }

        interface BoundsIntField extends BaseField<BoundsInt> {
            px?: number
            py?: number
            pz?: number
            sx?: number
            sy?: number
            sz?: number
        }

        interface ListView extends VisualElementNoChildren {
            "item-height"?: number
        }

        interface ScrollView extends VisualElement {
            mode?: ScrollViewMode
            "show-horizontal-scroller"?: boolean
            "show-vertical-scroller"?: boolean
            "horizontal-page-size"?: number
            "vertical-page-size"?: number
        }

        interface TreeView extends VisualElement {
            "item-height"?: number
        }

        interface PopupWindow extends TextElement {

        }

        /**
         * OneJS Elements
         */

        interface GradientRect extends VisualElement  {
            colors?: Color[]
        }

        interface Flipbook extends VisualElement  {
            src?: string | Texture2D
            count?: number
            interval?: number
            "num-per-row"?: number
            "random-rotation"?: boolean
        }

        /**
         * All-in-one
         */

        export interface IntrinsicElements {
            div: VisualElement
            box: Box
            text: TextElement
            label: Label
            image: Image
            foldout: Foldout
            template: Template
            instance: Instance
            templatecontainer: TemplateContainer
            button: Button
            repeatbutton: RepeatButton
            toggle: Toggle
            scroller: Scroller
            slider: Slider
            sliderint: SliderInt
            minmaxslider: MinMaxSlider
            enumfield: EnumField
            progressbar: ProgressBar

            textfield: TextField
            integerfield: IntegerField
            floatfield: FloatField
            vector2field: Vector2Field
            vector2intfield: Vector2IntField
            vector3field: Vector3Field
            vector3intfield: Vector3IntField
            vector4field: Vector4Field
            rectfield: RectField
            rectintfield: RectIntField
            boundsfield: BoundsField
            boundsintfield: BoundsIntField

            listview: ListView
            scrollview: ScrollView
            treeview: TreeView
            popupwindow: PopupWindow

            gradientrect: GradientRect
            flipbook: Flipbook
        }
    }
}

// declare namespace JSX {
//     interface IntrinsicElements {
//         label: any
//     }
//     // interface ElementAttributesProperty {
//     //     props;
//     // }
// }