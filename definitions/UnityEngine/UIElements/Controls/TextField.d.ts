


declare module "UnityEngine/UIElements" {
    import { Char } from "System"
    import { Color, Vector2 } from "UnityEngine"
    import { MeasureMode } from "UnityEngine/UIElements/VisualElement"


    export interface IMixedValueSupport {
        showMixedValue: boolean
    }

    export class BaseField<TValueType> extends BindableElement implements IMixedValueSupport, INotifyValueChanged<TValueType> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static noLabelVariantUssClassName: string
        static labelDraggerVariantUssClassName: string
        static mixedValueLabelUssClassName: string
        static alignedFieldUssClassName: string
        value: TValueType
        labelElement: Label
        label: string
        showMixedValue: boolean
        SetValueWithoutNotify(newValue: TValueType): void
    }

    export class TextInputBaseField<TValueType> extends BaseField<TValueType> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        static singleLineInputUssClassName: string
        static multilineInputUssClassName: string
        static textInputUssName: string
        text: string
        isReadOnly: boolean
        isPasswordField: boolean
        textSelection: ITextSelection
        textEdition: ITextEdition
        selectionColor: Color
        cursorColor: Color
        cursorIndex: number
        cursorPosition: Vector2
        selectIndex: number
        selectAllOnFocus: boolean
        selectAllOnMouseUp: boolean
        maxLength: number
        doubleClickSelectsWord: boolean
        tripleClickSelectsLine: boolean
        isDelayed: boolean
        maskChar: Char
        SelectAll(): void
        SelectNone(): void
        SelectRange(cursorIndex: number, selectionIndex: number): void
        SetVerticalScrollerVisibility(sv: ScrollerVisibility): boolean
        MeasureTextSize(textToMeasure: string, width: number, widthMode: MeasureMode, height: number, heightMode: MeasureMode): Vector2
    }

    export class TextField extends TextInputBaseField<string> {
        static ussClassName: string
        static labelUssClassName: string
        static inputUssClassName: string
        multiline: boolean
        value: string
        constructor()
        constructor(maxLength: number, multiline: boolean, isPasswordField: boolean, maskChar: Char)
        constructor(label: string)
        constructor(label: string, maxLength: number, multiline: boolean, isPasswordField: boolean, maskChar: Char)
        SetValueWithoutNotify(newValue: string): void
    }
}