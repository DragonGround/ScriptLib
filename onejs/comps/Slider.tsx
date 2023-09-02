import math from "math"
import { JSX, h } from "preact"
import { Dom } from "OneJS/Dom"
import { Style } from "preact/jsx"
import { useCallback, useEffect, useRef, useState } from "preact/hooks"
import { IPointerEvent, MouseDownEvent, MouseMoveEvent, PointerDownEvent, PointerMoveEvent, PointerUpEvent } from "UnityEngine/UIElements"

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

export function Slider({ min, max, value, onChange, onPointerDown, onPointerMove, onPointerUp, class: $class, trackClass, trackStyle, activeTrackClass, activeTrackStyle, thumbClass, thumbStyle, ...props }: SliderProps): JSX.Element {
    const trackRef = useRef<Dom>()
    const activeTrackRef = useRef<Dom>()

    useEffect(() => {
        const ratio = math.unlerp(min ?? 0, max ?? 1, value ?? min ?? 0)
        activeTrackRef.current.style.width = `${Math.round(ratio * 100)}%`
    }, [min, max, value])

    const handlePointerDown = useCallback((e: PointerDownEvent) => {
        e.currentTarget.CapturePointer(e.pointerId)
        handlerPointerEvent(e)
        onPointerDown?.(e)
    }, [onPointerDown])

    const handlePointerMove = useCallback((e: PointerMoveEvent) => {
        if (e.currentTarget.HasPointerCapture(e.pointerId)) {
            handlerPointerEvent(e)
        }
        onPointerMove?.(e)
    }, [onPointerMove])

    const handlePointerUp = useCallback((e: PointerUpEvent) => {
        if (e.currentTarget.HasPointerCapture(e.pointerId)) {
            e.currentTarget.ReleasePointer(e.pointerId)
        }
        onPointerUp?.(e)
    }, [onPointerUp])

    const handlerPointerEvent = useCallback((e: IPointerEvent) => {
        const width = trackRef.current.ve.layout.width
        const ratio = math.saturate(e.localPosition.x / width)
        activeTrackRef.current.style.width = `${Math.round(ratio * 100)}%`
        onChange?.(math.lerp(min ?? 0, max ?? 0, ratio))
    }, [onChange, min, max])

    return (
        <div ref={trackRef} class={`h-8 justify-center ${$class ?? ""}`} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} {...props}>
            <div class={`h-2 bg-gray-400 rounded-[4px] ${trackClass ?? ""}`} style={trackStyle}>
                <div ref={activeTrackRef} class={`accented-bg-color h-2 rounded-[4px] ${activeTrackClass ?? ""}`} style={activeTrackStyle}>
                    <div class={`w-6 h-6 default-bg-color border border-gray-400 rounded-full absolute right-0 bottom-1 translate-3 ${thumbClass ?? ""}`} style={thumbStyle} />
                </div>
            </div>
        </div>
    )
}

export type OldSliderProps = {
    class?: string
    style?: Style
    value?: number
    onChange?: (value: number) => void
    min?: number
    max?: number
}

/**
 * OldSlider is included here for DOM manipulation reference. For practical use, opt for Slider instead.
 * Slider is more modular and uses PointerCapture for better tracking.
 */
export const OldSlider = ({ class: classProp, style, value, onChange, min: _min, max: _max }: OldSliderProps) => {
    const ref = useRef<Dom>()
    const progressRef = useRef<Dom>()
    const thumbRef = useRef<Dom>()

    const [mouseDown, setMouseDown] = useState(false)

    const min = _min || 0
    const max = _max || 1

    let currentValue = value === null || typeof value === "undefined" ? min : value
    let currentFraction = (currentValue - min) / (max - min)

    useEffect(() => {
        document.body.addEventListener("MouseMove", handleMouseMove)
        document.body.addEventListener("MouseUp", handleMouseUp)
        return () => {
            document.body.removeEventListener("MouseMove", handleMouseMove)
            document.body.removeEventListener("MouseUp", handleMouseUp)
        }
    }, [mouseDown])

    function calculateFromMouseX(clientX) {
        const rect = ref.current.ve.worldBound
        const fraction = (clientX - rect.left) / rect.width
        const newValue = (min + fraction * (max - min))
        return Math.min(Math.max(newValue, min), max)
    }

    function processValueChange(newValue: number) {
        if (newValue != currentValue) {
            onChange && onChange(newValue)
            currentValue = newValue
            currentFraction = (currentValue - min) / (max - min)
            const rect = ref.current.ve.worldBound
            progressRef.current.style.width = `${currentFraction * 100}%`
            thumbRef.current.style.left = currentFraction * rect.width
        }
    }

    function handleMouseDown(e: MouseDownEvent) {
        setMouseDown(true)
        const newValue = calculateFromMouseX(e.mousePosition.x)
        processValueChange(newValue)
    }

    function handleMouseMove(e: MouseMoveEvent) {
        if (!mouseDown) return
        const newValue = calculateFromMouseX(e.mousePosition.x)
        processValueChange(newValue)
    }

    function handleMouseUp() {
        setMouseDown(false)
    }

    return <div class={`h-[30px] justify-center ${classProp}`} ref={ref} onMouseDown={handleMouseDown} style={style}>
        <div class={`w-full h-[8px] bg-gray-400`} style={{ borderRadius: 4 }}>
            <div ref={progressRef} class={`accented-bg-color h-[8px] justify-center`} style={{ width: `${Math.round(currentFraction * 100)}%`, borderRadius: 4 }}>
            </div>
        </div>
        <div ref={thumbRef} class={`w-[24px] h-[24px] default-bg-color absolute rounded-full translate-x-[-10px]`} />
    </div>
}