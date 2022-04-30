


declare module "UnityEngine/UIElements" {
    import { ISerializable } from "System/Runtime/Serialization"
    import { AsyncCallback, Comparison, IAsyncResult, ICloneable, IDisposable, IEquatable, IntPtr, MulticastDelegate } from "System"
    import { IEnumerable, List } from "System/Collections/Generic"
    import { Color, Font, FontStyle, Matrix4x4, Quaternion, Rect, ScriptableObject, Sprite, Texture2D, Vector2, Vector3 } from "UnityEngine"
    import { StylePropertyId } from "UnityEngine/UIElements/StyleSheets"
    import { ITransitionAnimations, StyleValues, ValueAnimation } from "UnityEngine.UIElements.Experimental"

    export enum PropagationPhase {
        None,
        TrickleDown,
        AtTarget,
        DefaultActionAtTarget,
        BubbleUp,
        DefaultAction,
    }

    export interface IEventHandler {
        SendEvent(e: EventBase): void
        HandleEvent(evt: EventBase): void
        HasTrickleDownHandlers(): boolean
        HasBubbleUpHandlers(): boolean
    }

    export class EventCallback<TEventType, TCallbackArgs = void> extends MulticastDelegate implements ISerializable, ICloneable {
        constructor(object: any, method: IntPtr)
        Invoke(evt: TEventType): void
        Invoke(evt: TEventType, userArgs: TCallbackArgs): void
        BeginInvoke(evt: TEventType, callback: AsyncCallback, object: any): IAsyncResult
        BeginInvoke(evt: TEventType, userArgs: TCallbackArgs, callback: AsyncCallback, object: any): IAsyncResult
        EndInvoke(result: IAsyncResult): void
        EndInvoke(result: IAsyncResult): void
    }

    export enum TrickleDown {
        NoTrickleDown,
        TrickleDown,
    }

    export class CallbackEventHandler implements IEventHandler {
        RegisterCallback<TEventType>(callback: EventCallback<TEventType>, useTrickleDown: TrickleDown): void
        RegisterCallback<TEventType, TUserArgsType>(callback: EventCallback<TEventType, TUserArgsType>, userArgs: TUserArgsType, useTrickleDown: TrickleDown): void
        UnregisterCallback<TEventType>(callback: EventCallback<TEventType>, useTrickleDown: TrickleDown): void
        UnregisterCallback<TEventType, TUserArgsType>(callback: EventCallback<TEventType, TUserArgsType>, useTrickleDown: TrickleDown): void
        SendEvent(e: EventBase): void
        HandleEvent(evt: EventBase): void
        HasTrickleDownHandlers(): boolean
        HasBubbleUpHandlers(): boolean
    }

    export class Focusable extends CallbackEventHandler {
        focusController: FocusController
        focusable: boolean
        tabIndex: number
        delegatesFocus: boolean
        canGrabFocus: boolean
        Focus(): void
        Blur(): void
    }

    export class FocusChangeDirection implements IDisposable {
        static unspecified: FocusChangeDirection
        static none: FocusChangeDirection
        Dispose(): void
    }

    export interface IFocusRing {
        GetFocusChangeDirection(currentFocusable: Focusable, e: EventBase): FocusChangeDirection
        GetNextFocusable(currentFocusable: Focusable, direction: FocusChangeDirection): Focusable
    }

    export class FocusController {
        focusedElement: Focusable
        constructor(focusRing: IFocusRing)
    }

    export enum UsageHints {
        None,
        DynamicTransform,
        GroupTransform,
        MaskContainer,
        DynamicColor,
    }

    export interface ITransform {
        position: Vector3
        rotation: Quaternion
        scale: Vector3
        matrix: Matrix4x4
    }

    export enum PickingMode {
        Position,
        Ignore,
    }

    export interface IExperimentalFeatures {
        animation: ITransitionAnimations
    }

    export class Hierarchy {
        parent: VisualElement
        childCount: number
        Item: VisualElement
        Add(child: VisualElement): void
        Insert(index: number, child: VisualElement): void
        Remove(child: VisualElement): void
        RemoveAt(index: number): void
        Clear(): void
        IndexOf(element: VisualElement): number
        ElementAt(index: number): VisualElement
        Children(): IEnumerable<VisualElement>
        Sort(comp: Comparison<VisualElement>): void
        Equals(other: Hierarchy): boolean
        Equals(obj: any): boolean
        GetHashCode(): number
    }

    export enum ContextType {
        Player,
        Editor,
    }

    export class EventDispatcher {
    }

    export class ContextualMenuManager {
        DisplayMenuIfEventMatches(evt: EventBase, eventHandler: IEventHandler): void
        DisplayMenu(triggerEvent: EventBase, target: IEventHandler): void
    }

    export interface IPanel extends IDisposable {
        visualTree: VisualElement
        dispatcher: EventDispatcher
        contextType: ContextType
        focusController: FocusController
        contextualMenuManager: ContextualMenuManager
        Pick(point: Vector2): VisualElement
        PickAll(point: Vector2, picked: List<VisualElement>): VisualElement
    }

    export class CustomStyleProperty<T> implements IEquatable<CustomStyleProperty<T>> {
        name: string
        constructor(propertyName: string)
        Equals(obj: any): boolean
        Equals(other: CustomStyleProperty<T>): boolean
        GetHashCode(): number
    }

    export interface ICustomStyle {
        TryGetValue(property: CustomStyleProperty<number>, value: number): boolean
        TryGetValue(property: CustomStyleProperty<number>, value: number): boolean
        TryGetValue(property: CustomStyleProperty<boolean>, value: boolean): boolean
        TryGetValue(property: CustomStyleProperty<Color>, value: Color): boolean
        TryGetValue(property: CustomStyleProperty<Texture2D>, value: Texture2D): boolean
        TryGetValue(property: CustomStyleProperty<Sprite>, value: Sprite): boolean
        TryGetValue(property: CustomStyleProperty<VectorImage>, value: VectorImage): boolean
        TryGetValue(property: CustomStyleProperty<string>, value: string): boolean
    }

    export class VisualElementStyleSheetSet implements IEquatable<VisualElementStyleSheetSet> {
        count: number
        Item: StyleSheet
        Add(styleSheet: StyleSheet): void
        Clear(): void
        Remove(styleSheet: StyleSheet): boolean
        Contains(styleSheet: StyleSheet): boolean
        Equals(other: VisualElementStyleSheetSet): boolean
        Equals(obj: any): boolean
        GetHashCode(): number
    }

    export class VisualElement extends Focusable implements IStylePropertyAnimations, ITransform, ITransitionAnimations, IExperimentalFeatures, IVisualElementScheduler {
        static disabledUssClassName: string

        Execute(timerUpdateEvent: (ts: TimerState) => void): IVisualElementScheduledItem
        Execute(updateEvent: Function): IVisualElementScheduledItem

        Start(from: number, to: number, durationMs: number, onValueChanged: (ve: VisualElement, v: number) => void): ValueAnimation<number>
        Start(from: Rect, to: Rect, durationMs: number, onValueChanged: (ve: VisualElement, v: Rect) => void): ValueAnimation<Rect>
        Start(from: Color, to: Color, durationMs: number, onValueChanged: (ve: VisualElement, v: Color) => void): ValueAnimation<Color>
        Start(from: Vector3, to: Vector3, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector3) => void): ValueAnimation<Vector3>
        Start(from: Vector2, to: Vector2, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector2) => void): ValueAnimation<Vector2>
        Start(from: Quaternion, to: Quaternion, durationMs: number, onValueChanged: (ve: VisualElement, v: Quaternion) => void): ValueAnimation<Quaternion>
        Start(from: StyleValues, to: StyleValues, durationMs: number): ValueAnimation<StyleValues>
        Start(to: StyleValues, durationMs: number): ValueAnimation<StyleValues>
        Start(fromValueGetter: (ve: VisualElement) => number, to: number, durationMs: number, onValueChanged: (ve: VisualElement, v: number) => void): ValueAnimation<number>
        Start(fromValueGetter: (ve: VisualElement) => Rect, to: Rect, durationMs: number, onValueChanged: (ve: VisualElement, v: Rect) => void): ValueAnimation<Rect>
        Start(fromValueGetter: (ve: VisualElement) => Color, to: Color, durationMs: number, onValueChanged: (ve: VisualElement, v: Color) => void): ValueAnimation<Color>
        Start(fromValueGetter: (ve: VisualElement) => Vector3, to: Vector3, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector3) => void): ValueAnimation<Vector3>
        Start(fromValueGetter: (ve: VisualElement) => Vector2, to: Vector2, durationMs: number, onValueChanged: (ve: VisualElement, v: Vector2) => void): ValueAnimation<Vector2>
        Start(fromValueGetter: (ve: VisualElement) => Quaternion, to: Quaternion, durationMs: number, onValueChanged: (ve: VisualElement, v: Quaternion) => void): ValueAnimation<Quaternion>
        Layout(to: Rect, durationMs: number): ValueAnimation<Rect>
        TopLeft(to: Vector2, durationMs: number): ValueAnimation<Vector2>
        Size(to: Vector2, durationMs: number): ValueAnimation<Vector2>
        Scale(to: number, duration: number): ValueAnimation<number>
        Position(to: Vector3, duration: number): ValueAnimation<Vector3>
        Rotation(to: Quaternion, duration: number): ValueAnimation<Quaternion>

        runningAnimationCount: number
        completedAnimationCount: number
        Start(id: StylePropertyId, from: number, to: number, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: number, to: number, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Length, to: Length, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Color, to: Color, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        StartEnum(id: StylePropertyId, from: number, to: number, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Background, to: Background, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: FontDefinition, to: FontDefinition, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Font, to: Font, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: TextShadow, to: TextShadow, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Scale, to: Scale, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Translate, to: Translate, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: Rotate, to: Rotate, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        Start(id: StylePropertyId, from: TransformOrigin, to: TransformOrigin, durationMs: number, delayMs: number, easingCurve: (n: number) => number): boolean
        HasRunningAnimation(id: StylePropertyId): boolean
        UpdateAnimation(id: StylePropertyId): void
        GetAllAnimations(outPropertyIds: List<StylePropertyId>): void
        CancelAnimation(id: StylePropertyId): void
        CancelAllAnimations(): void

        position: Vector3
        rotation: Quaternion
        scale: Vector3
        matrix: Matrix4x4

        animation: ITransitionAnimations

        viewDataKey: string
        userData: any
        canGrabFocus: boolean
        focusController: FocusController
        usageHints: UsageHints
        transform: ITransform
        layout: Rect
        contentRect: Rect
        worldBound: Rect
        localBound: Rect
        worldTransform: Matrix4x4
        pickingMode: PickingMode
        name: string
        enabledInHierarchy: boolean
        enabledSelf: boolean
        visible: boolean
        generateVisualContent: (mgc: MeshGenerationContext) => void
        experimental: IExperimentalFeatures
        hierarchy: Hierarchy
        cacheAsBitmap: boolean
        parent: VisualElement
        panel: IPanel
        contentContainer: VisualElement
        visualTreeAssetSource: VisualTreeAsset
        Item: VisualElement
        childCount: number
        schedule: IVisualElementScheduler
        style: IStyle
        customStyle: ICustomStyle
        styleSheets: VisualElementStyleSheetSet
        tooltip: string
        resolvedStyle: IResolvedStyle
        constructor()
        Focus(): void
        SendEvent(e: EventBase): void
        SetEnabled(value: boolean): void
        MarkDirtyRepaint(): void
        ContainsPoint(localPoint: Vector2): boolean
        Overlaps(rectangle: Rect): boolean
        ToString(): string
        GetClasses(): IEnumerable<string>
        ClearClassList(): void
        AddToClassList(className: string): void
        RemoveFromClassList(className: string): void
        ToggleInClassList(className: string): void
        EnableInClassList(className: string, enable: boolean): void
        ClassListContains(cls: string): boolean
        FindAncestorUserData(): any
        Add(child: VisualElement): void
        Insert(index: number, element: VisualElement): void
        Remove(element: VisualElement): void
        RemoveAt(index: number): void
        Clear(): void
        ElementAt(index: number): VisualElement
        IndexOf(element: VisualElement): number
        Children(): IEnumerable<VisualElement>
        Sort(comp: Comparison<VisualElement>): void
        BringToFront(): void
        SendToBack(): void
        PlaceBehind(sibling: VisualElement): void
        PlaceInFront(sibling: VisualElement): void
        RemoveFromHierarchy(): void
        Contains(child: VisualElement): boolean
        FindCommonAncestor(other: VisualElement): VisualElement
    }

    export interface IBindable {
        binding: IBinding
        bindingPath: string
    }

    export class TimerState implements IEquatable<TimerState> {
        start: number
        now: number
        deltaTime: number
        Equals(obj: any): boolean
        Equals(other: TimerState): boolean
        GetHashCode(): number
    }

    export interface IVisualElementScheduledItem {
        element: VisualElement
        isActive: boolean
        Resume(): void
        Pause(): void
        ExecuteLater(delayMs: number): void
        StartingIn(delayMs: number): IVisualElementScheduledItem
        Every(intervalMs: number): IVisualElementScheduledItem
        Until(stopCondition: () => boolean): IVisualElementScheduledItem
        ForDuration(durationMs: number): IVisualElementScheduledItem
    }

    export interface IVisualElementScheduler {
        Execute(timerUpdateEvent: (ts: TimerState) => void): IVisualElementScheduledItem
        Execute(updateEvent: Function): IVisualElementScheduledItem
    }



    export class TemplateContainer extends BindableElement {
        templateId: string
        templateSource: VisualTreeAsset
        contentContainer: VisualElement
        constructor()
        constructor(templateId: string)
    }

    export class VisualTreeAsset extends ScriptableObject {
        importedWithErrors: boolean
        importedWithWarnings: boolean
        templateDependencies: IEnumerable<VisualTreeAsset>
        stylesheets: IEnumerable<StyleSheet>
        contentHash: number
        constructor()
        Instantiate(): TemplateContainer
        Instantiate(bindingPath: string): TemplateContainer
        CloneTree(): TemplateContainer
        CloneTree(bindingPath: string): TemplateContainer
        CloneTree(target: VisualElement): void
        CloneTree(target: VisualElement, firstElementIndex: number, elementAddedCount: number): void
    }
}