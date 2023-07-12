import { Dom } from "OneJS/Dom"
import { TransitionEndEvent } from "UnityEngine/UIElements"
import { createContext, h } from "preact"
import { Children } from "preact/compat"
import { useContext, useEffect, useRef, useState } from "preact/hooks"
import { Style } from "preact/jsx"

export interface TransitionBaseProps {
    class?: string
    children?: any
    style?: Style
    enter?: string
    enterFrom?: string
    enterTo?: string
    leave?: string
    leaveFrom?: string
    leaveTo?: string
}

export interface TransitionProps extends TransitionBaseProps {
    show: boolean
    appear?: boolean
}

export interface TransitionChildProps extends TransitionBaseProps {

}

const TransitionContext = createContext({} as any)

/**
 * Setting ref.current.style.display should be the more performance approach, but
 * right now there seems to be an UI Toolkit bug that causes issues when animating 
 * opacity and setting display values at the same time. 
 */

const TransitionBase = ({ class: classProp, children, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, style }: TransitionBaseProps) => {
    const ref = useRef<Dom>()
    const firstRender = useRef(true)
    const transCount = useRef(0)

    const { showing, appear } = useContext(TransitionContext)
    const [reallyShowing, setReallyShowing] = useState(showing as boolean)

    useEffect(() => {
        if (firstRender.current) {
            // ref.current.style.display = showing && appear ? "Flex" : "None"
            ref.current.setAttribute("class", `${classProp} ${!showing ? enter : leave} ${!showing ? enterFrom : leaveFrom}`)
            if (showing && appear) {
                ref.current.setAttribute("class", `${classProp} ${enter} ${enterTo}`)
            }
            firstRender.current = false
        } else {
            transCount.current = 0
            ref.current.setAttribute("class", `${classProp} ${showing ? enter : leave} ${showing ? enterTo : leaveTo}`)
            if (!reallyShowing && showing) {
                // ref.current.style.display = "Flex"
                setReallyShowing(showing)
            }
        }
    }, [showing])

    function onTransitionRun() {
        transCount.current++
    }

    function onTransitionEnd(e: TransitionEndEvent) {
        transCount.current--
        if (firstRender.current || transCount.current > 0) return
        ref.current.setAttribute("class", `${classProp} ${showing ? leave : enter} ${showing ? leaveFrom : enterFrom}`)
        if (!showing) {
            // ref.current.style.display = "None"
            setReallyShowing(showing)
        }
    }

    const classStr = showing && appear && firstRender.current ? `${classProp} ${enter} ${enterFrom}` : classProp

    return <div ref={ref} class={`${classStr}`} style={style} onTransitionRun={onTransitionRun} onTransitionEnd={onTransitionEnd}>
        {reallyShowing ? children : null}
    </div>
}

export const Transition = ({ class: classProp, children, show, appear, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, style }: TransitionProps) => {
    const hasTransitionChild = useRef(false)
    const firstRun = useRef(false)
    const [showing, setShowing] = useState(show)

    useEffect(() => {
        setShowing(show)
    }, [show])

    firstRun.current = true
    hasTransitionChild.current = isComponentInTree(children, Transition.Child)

    return <TransitionContext.Provider value={{ showing, appear }}>
        {hasTransitionChild.current ? <div class={classProp} style={style}>{children}</div> : <TransitionBase class={classProp} style={style} enter={enter} enterFrom={enterFrom} enterTo={enterTo} leave={leave} leaveFrom={leaveFrom} leaveTo={leaveTo}>{children}</TransitionBase>}
    </TransitionContext.Provider>
}

Transition.Child = TransitionBase

const isComponentInTree = (children, ComponentToFind) => {
    if (!Array.isArray(children)) {
        children = [children]
    }

    for (let i = 0; i < children.length; i++) {
        const child = children[i]

        if (child && (child.type === ComponentToFind || child.nodeName === ComponentToFind)) {
            return true
        }

        if (child && child.props && child.props.children) {
            if (isComponentInTree(child.props.children, ComponentToFind)) {
                return true
            }
        }
    }

    return false
}