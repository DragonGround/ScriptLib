import { Dom } from "OneJS/Dom"
import {
    IPointerEvent,
    PointerDownEvent,
    PointerMoveEvent,
    PointerUpEvent,
} from "UnityEngine/UIElements"
import math from "math"
import { JSX } from "preact"
import { useCallback, useEffect, useRef } from "preact/hooks"
import { Style } from "preact/jsx"

export interface SliderProps extends JSX.VisualElement {
    min?: number
    max?: number
    value?: number
    onChange?: (value: number) => void
    trackClass?: string
    trackStyle?: Style
    activeTrackClass?: string
    activeTrackStyle?: Style
    thumbClass?: string
    thumbStyle?: Style
}

export function Slider({
    min,
    max,
    value,
    onChange,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    class: $class,
    trackClass,
    trackStyle,
    activeTrackClass,
    activeTrackStyle,
    thumbClass,
    thumbStyle,
    ...props
}: SliderProps): JSX.Element {
    const trackRef = useRef<Dom>()
    const activeTrackRef = useRef<Dom>()

    useEffect(() => {
        const ratio = math.unlerp(min ?? 0, max ?? 1, value ?? min ?? 0)
        activeTrackRef.current.style.width = `${Math.round(ratio * 100)}%`
    }, [min, max, value])

    const handlePointerDown = useCallback(
        (e: PointerDownEvent) => {
            e.currentTarget.CapturePointer(e.pointerId)
            handlerPointerEvent(e)
            onPointerDown?.(e)
        },
        [onPointerDown]
    )

    const handlePointerMove = useCallback(
        (e: PointerMoveEvent) => {
            if (e.currentTarget.HasPointerCapture(e.pointerId)) {
                handlerPointerEvent(e)
            }

            onPointerMove?.(e)
        },
        [onPointerMove]
    )

    const handlePointerUp = useCallback(
        (e: PointerUpEvent) => {
            if (e.currentTarget.HasPointerCapture(e.pointerId)) {
                e.currentTarget.ReleasePointer(e.pointerId)
            }

            onPointerUp?.(e)
        },
        [onPointerUp]
    )

    const handlerPointerEvent = useCallback(
        (e: IPointerEvent) => {
            const width = trackRef.current.ve.layout.width
            const ratio = math.saturate(e.localPosition.x / width)
            activeTrackRef.current.style.width = `${Math.round(ratio * 100)}%`
            onChange?.(math.lerp(min, max, ratio))
        },
        [onChange, min, max]
    )

    return (
        <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            class={`h-8 justify-center ${$class ?? ""}`}
            {...props}
        >
            <div
                class={`h-2 bg-gray-400 rounded-[4px] ${trackClass ?? ""}`}
                style={trackStyle}
            >
                <div
                    ref={activeTrackRef}
                    class={`accented-bg-color h-2 rounded-[4px] ${
                        activeTrackClass ?? ""
                    }`}
                    style={activeTrackStyle}
                >
                    <div
                        class={`w-6 h-6 default-bg-color border border-gray-400 rounded-full absolute right-0 bottom-1 translate-3 ${
                            thumbClass ?? ""
                        }`}
                        style={thumbStyle}
                    />
                </div>
            </div>
        </div>
    )
}
