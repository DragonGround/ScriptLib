


declare module "UnityEngine/UIElements" {
    import { Char } from "System"
    import { Color, Vector2 } from "UnityEngine"
    import { MeasureMode } from "UnityEngine/UIElements/VisualElement"

    export interface ITextSelection {
        cursorColor: Color
        cursorIndex: number
        doubleClickSelectsWord: boolean
        selectIndex: number
        selectionColor: Color
        tripleClickSelectsLine: boolean
        cursorPosition: Vector2
        HasSelection(): boolean
        SelectAll(): void
        SelectNone(): void
        SelectRange(cursorIndex: number, selectionIndex: number): void
    }

    export interface INotifyValueChanged<T> {
        value: T
        SetValueWithoutNotify(newValue: T): void
    }

    export interface ITextEdition {
        isReadOnly: boolean
        maxLength: number
        isDelayed: boolean
        maskChar: Char
        isPassword: boolean
    }

    export class TextElement extends BindableElement implements ITextElement, INotifyValueChanged<string>, ITextEdition, ITextSelection {
        static ussClassName: string

        cursorColor: Color
        cursorIndex: number
        doubleClickSelectsWord: boolean
        selectIndex: number
        selectionColor: Color
        tripleClickSelectsLine: boolean
        cursorPosition: Vector2
        HasSelection(): boolean
        SelectAll(): void
        SelectNone(): void
        SelectRange(cursorIndex: number, selectionIndex: number): void

        isReadOnly: boolean
        maxLength: number
        isDelayed: boolean
        maskChar: Char
        isPassword: boolean

        value: string
        SetValueWithoutNotify(newValue: string): void

        text: string
        enableRichText: boolean
        displayTooltipWhenElided: boolean
        isElided: boolean
        selection: ITextSelection
        isSelectable: boolean
        constructor()
        MeasureTextSize(textToMeasure: string, width: number, widthMode: MeasureMode, height: number, heightMode: MeasureMode): Vector2
    }
}