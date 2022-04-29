

declare module "UnityEngine/UIElements" {
    import { IDisposable } from "System"
    import { ISerializationCallbackReceiver } from "UnityEngine"
    import { IEnumerable, IList, IListAny, List } from "System/Collections/Generic"

    export enum SelectionType {
        None,
        Single,
        Multiple,
    }

    export class CollectionViewController implements IDisposable {
        itemsSource: IListAny
        SetView(collectionView: BaseVerticalCollectionView): void
        Dispose(): void
        GetItemsCount(): number
        GetIndexForId(id: number): number
        GetIdForIndex(index: number): number
        GetItemForIndex(index: number): any
    }

    export enum AlternatingRowBackground {
        None,
        ContentOnly,
        All,
    }

    export enum CollectionVirtualizationMethod {
        FixedHeight,
        DynamicHeight,
    }

    export class BaseVerticalCollectionView extends BindableElement implements ISerializationCallbackReceiver {
        static ussClassName: string
        static borderUssClassName: string
        static itemUssClassName: string
        static dragHoverBarUssClassName: string
        static itemDragHoverUssClassName: string
        static itemSelectedVariantUssClassName: string
        static itemAlternativeBackgroundUssClassName: string
        static listScrollViewUssClassName: string
        itemsSource: IListAny
        makeItem: () => VisualElement
        bindItem: (ve: VisualElement) => number
        unbindItem: (ve: VisualElement) => number
        destroyItem: (ve: VisualElement) => void
        contentContainer: VisualElement
        selectionType: SelectionType
        selectedItem: any
        selectedItems: IEnumerable<any>
        selectedIndex: number
        selectedIndices: IEnumerable<number>
        viewController: CollectionViewController
        resolvedItemHeight: number
        showBorder: boolean
        reorderable: boolean
        horizontalScrollingEnabled: boolean
        showAlternatingRowBackgrounds: AlternatingRowBackground
        virtualizationMethod: CollectionVirtualizationMethod
        itemHeight: number
        fixedItemHeight: number
        constructor()
        constructor(itemsSource: IListAny, itemHeight: number)
        constructor(itemsSource: IListAny, itemHeight: number, makeItem: () => VisualElement, bindItem: (ve: VisualElement) => number)
        SetViewController(controller: CollectionViewController): void
        GetRootElementForId(id: number): VisualElement
        GetRootElementForIndex(index: number): VisualElement
        RefreshItem(index: number): void
        RefreshItems(): void
        Refresh(): void
        Rebuild(): void
        ScrollTo(visualElement: VisualElement): void
        ScrollToItem(index: number): void
        ScrollToId(id: number): void
        ScrollToItemById(id: number): void
        OnKeyDown(evt: KeyDownEvent): void
        AddToSelection(index: number): void
        RemoveFromSelection(index: number): void
        SetSelection(index: number): void
        SetSelection(indices: IEnumerable<number>): void
        SetSelectionWithoutNotify(indices: IEnumerable<number>): void
        ClearSelection(): void
        OnBeforeSerialize(): void
        OnAfterDeserialize(): void
    }

    export class BaseListViewController extends CollectionViewController {
        NeedsDragHandle(index: number): boolean
        AddItems(itemCount: number): void
        Move(index: number, newIndex: number): void
        RemoveItem(index: number): void
        RemoveItems(indices: List<number>): void
    }

    export enum ListViewReorderMode {
        Simple,
        Animated,
    }

    export class BaseListView extends BaseVerticalCollectionView {
        static ussClassName: string
        static itemUssClassName: string
        static emptyLabelUssClassName: string
        static reorderableUssClassName: string
        static reorderableItemUssClassName: string
        static reorderableItemContainerUssClassName: string
        static reorderableItemHandleUssClassName: string
        static reorderableItemHandleBarUssClassName: string
        static footerUssClassName: string
        static foldoutHeaderUssClassName: string
        static arraySizeFieldUssClassName: string
        static listViewWithHeaderUssClassName: string
        static listViewWithFooterUssClassName: string
        static scrollViewWithFooterUssClassName: string
        showBoundCollectionSize: boolean
        showFoldoutHeader: boolean
        headerTitle: string
        showAddRemoveFooter: boolean
        viewController: BaseListViewController
        reorderMode: ListViewReorderMode
        constructor()
        constructor(itemsSource: IListAny, itemHeight: number)
        SetViewController(controller: CollectionViewController): void
    }

    export class ListView extends BaseListView {
        makeItem: () => VisualElement
        bindItem: (ve: VisualElement) => number
        unbindItem: (ve: VisualElement) => number
        destroyItem: (ve: VisualElement) => void
        constructor()
        constructor(itemsSource: IListAny, itemHeight: number, makeItem: () => VisualElement, bindItem: (ve: VisualElement) => number)
    }
}