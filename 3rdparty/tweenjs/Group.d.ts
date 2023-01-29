import type { Tween, UnknownProps } from './tween';
export default class Group {
    private _tweens;
    private _tweensAddedDuringUpdate;
    getAll(): Array<Tween<UnknownProps>>;
    removeAll(): void;
    add(tween: Tween<UnknownProps>): void;
    remove(tween: Tween<UnknownProps>): void;
    update(time?: number, preserve?: boolean): boolean;
}
