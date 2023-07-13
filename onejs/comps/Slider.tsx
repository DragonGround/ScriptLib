import { Dom } from "OneJS/Dom"
import { MouseDownEvent, MouseMoveEvent } from "UnityEngine/UIElements"
import { h } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"
import { Style } from "preact/jsx"

export type SliderProps = {
    class?: string
    style?: Style
    value?: number
    onChange?: (value: number) => void
    min?: number
    max?: number
}

export const Slider = ({ class: classProp, style, value, onChange, min: _min, max: _max }: SliderProps) => {
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