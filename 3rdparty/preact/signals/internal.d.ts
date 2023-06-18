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

