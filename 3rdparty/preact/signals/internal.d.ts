import { Component, VNode as PVNode } from "preact";
import { Signal } from "preact/signals-core";

export interface Effect {
	_sources: object | undefined;
	_start(): () => void;
	_callback(): void;
	_dispose(): void;
}

export interface PropertyUpdater {
	_update: (newSignal: Signal, newProps: Record<string, any>) => void;
	_dispose: () => void;
}

export interface AugmentedElement extends HTMLElement {
	_updaters?: Record<string, PropertyUpdater | undefined> | null;
}

export interface AugmentedComponent extends Component<any, any> {
	_vnode: VNode;
	_updater?: Effect;
	_updateFlags: number;
}

export interface VNode<P = any> extends PVNode<P> {
	/** The component instance for this VNode */
	_component: AugmentedComponent;
	/** The parent VNode */
	_parent?: VNode;
	/** The DOM node for this VNode */
	_dom?: Element | Text;
	/** Props that had Signal values before diffing (used after diffing to subscribe) */
	__np?: Record<string, any> | null;
}

export const enum OptionsTypes {
	HOOK = "_hook",
	DIFF = "_diff",
	DIFFED = "diffed",
	RENDER = "_render",
	CATCH_ERROR = "_catchError",
	UNMOUNT = "unmount",
}

export interface OptionsType {
	[OptionsTypes.HOOK](component: Component, index: number, type: number): void;
	[OptionsTypes.DIFF](vnode: VNode): void;
	[OptionsTypes.DIFFED](vnode: VNode): void;
	[OptionsTypes.RENDER](vnode: VNode): void;
	[OptionsTypes.CATCH_ERROR](error: any, vnode: VNode, oldVNode: VNode): void;
	[OptionsTypes.UNMOUNT](vnode: VNode): void;
}

export type HookFn<T extends keyof OptionsType> = (
	old: OptionsType[T],
	...a: Parameters<OptionsType[T]>
) => ReturnType<OptionsType[T]>;
