

declare module "UnityEngine/UIElements" {
    import { IList, IEnumerable, IListAny } from "System/Collections/Generic"
    import { ISerializationCallbackReceiver } from "UnityEngine"

    export class BaseTreeViewController extends CollectionViewController {
        itemsSource: IListAny
        RebuildTree(): void
        GetRootItemIds(): IEnumerable<number>
        GetAllItemIds(rootIds: IEnumerable<number>): IEnumerable<number>
        GetParentId(id: number): number
        GetChildrenIds(id: number): IEnumerable<number>
        Move(id: number, newParentId: number, childIndex: number, rebuildTree: boolean): void
        TryRemoveItem(id: number, rebuildTree: boolean): boolean
        GetTreeItemsCount(): number
        GetIndexForId(id: number): number
        GetIdForIndex(index: number): number
        HasChildren(id: number): boolean
        HasChildrenByIndex(index: number): boolean
        GetChildrenIdsByIndex(index: number): IEnumerable<number>
        GetChildIndexForId(id: number): number
        IsExpanded(id: number): boolean
        IsExpandedByIndex(index: number): boolean
        ExpandItemByIndex(index: number, expandAllChildren: boolean, refresh: boolean): void
        ExpandItem(id: number, expandAllChildren: boolean, refresh: boolean): void
        CollapseItemByIndex(index: number, collapseAllChildren: boolean): void
        CollapseItem(id: number, collapseAllChildren: boolean): void
        ExpandAll(): void
        CollapseAll(): void
    }

    export class BaseTreeView extends BaseVerticalCollectionView {
        static ussClassName: string
        static itemUssClassName: string
        static itemToggleUssClassName: string
        static itemIndentsContainerUssClassName: string
        static itemIndentUssClassName: string
        static itemContentContainerUssClassName: string
        itemsSource: IListAny
        viewController: BaseTreeViewController
        autoExpand: boolean
        constructor()
        constructor(itemHeight: number)
        GetRootIds(): IEnumerable<number>
        GetTreeCount(): number
        SetViewController(controller: CollectionViewController): void
        GetIdForIndex(index: number): number
        GetParentIdForIndex(index: number): number
        GetChildrenIdsForIndex(index: number): IEnumerable<number>
        TryRemoveItem(id: number): boolean
        SetSelectionById(id: number): void
        SetSelectionById(ids: IEnumerable<number>): void
        SetSelectionByIdWithoutNotify(ids: IEnumerable<number>): void
        AddToSelectionById(id: number): void
        RemoveFromSelectionById(id: number): void
        IsExpanded(id: number): boolean
        CollapseItem(id: number, collapseAllChildren: boolean): void
        ExpandItem(id: number, expandAllChildren: boolean): void
        ExpandRootItems(): void
        ExpandAll(): void
        CollapseAll(): void
    }

    export class TreeViewController extends BaseTreeViewController {
    }

    export class TreeView extends BaseTreeView {
        makeItem: () => VisualElement
        bindItem: (ve: VisualElement) => number
        unbindItem: (ve: VisualElement) => number
        destroyItem: (ve: VisualElement) => void
        viewController: TreeViewController
        constructor()
        constructor(makeItem: () => VisualElement, bindItem: (ve: VisualElement) => number)
        constructor(itemHeight: number, makeItem: () => VisualElement, bindItem: (ve: VisualElement) => number)
    }
}