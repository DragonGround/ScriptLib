import { Dom } from "OneJS/Dom"
import { h, Fragment, createContext } from "preact"
import { useContext, useEffect, useRef, useState } from "preact/hooks"
import { Style } from "preact/jsx"
import { FAIcon } from "onejs/fonts/fontawesome"
import { MeshGenerationContext } from "UnityEngine/UIElements"

export interface ListboxProps {
    class?: string
    children?: any
    style?: Style
    items: any[]
    index?: number
    onChange?: (item: any) => void
}

const ListboxContext = createContext({} as any)

export const Listbox = ({ class: classProp, children, items, onChange, index, style }: ListboxProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(index || 0)
    const ref = useRef<Dom>()

    useEffect(() => {
        onChange && onChange(items[selectedIndex])
    }, [selectedIndex])

    function calculatePopupStyle() {
        const bound = ref.current.ve.worldBound
        return {
            top: bound.y + bound.height,
            left: bound.x,
            width: bound.width,
        }
    }

    return <ListboxContext.Provider value={{ isOpen, setIsOpen, selectedIndex, setSelectedIndex, items, calculatePopupStyle }}>
        <div ref={ref} class={`${classProp}`} style={style}>{children}</div>
    </ListboxContext.Provider>
}

export interface ListboxButtonProps {
    class?: string
    children?: any
    style?: Style
}

Listbox.Button = ({ class: classProp, children }: ListboxButtonProps) => {
    const { isOpen, setIsOpen } = useContext(ListboxContext)

    function onClick() {
        setIsOpen(!isOpen)
    }

    return <div class={`${classProp}`} onClick={onClick}>
        {children}
    </div>
}

export interface ListboxOptionsProps {
    class?: string
    children?: any
    style?: Style
}

Listbox.Options = ({ class: classProp, children }: ListboxOptionsProps) => {
    const { isOpen, setIsOpen, calculatePopupStyle } = useContext(ListboxContext)
    const ref = useRef<Dom>()
    const innerRef = useRef<Dom>()

    useEffect(() => {
        if (!isOpen) return
        document.body.appendChild(ref.current as any)
        setTimeout(() => {
            innerRef.current.style.opacity = 1
        })
    }, [isOpen])

    function onClick() {
        setIsOpen(false)
    }

    return isOpen ? <div ref={ref} class={`absolute w-full h-full`} onClick={onClick}>
        <div ref={innerRef} class={`opacity-0 transition-[opacity] duration-200 ${classProp}`} style={calculatePopupStyle()}>{children}</div>
    </div> : null
}

export interface ListboxOptionProps {
    class?: string
    children?: any
    style?: Style
    index: number
    item?: any
}

Listbox.Option = ({ class: classProp, index, children, item, style }: ListboxOptionProps) => {
    const { setIsOpen, selectedIndex, setSelectedIndex, items } = useContext(ListboxContext)

    function onClick() {
        setSelectedIndex(index)
        setIsOpen(false)
    }

    return <div key={`${item.id}`} class={`${classProp}`} onClick={onClick} style={style}>
        {typeof children === "function" ? children({ selected: selectedIndex == index }) : children}
    </div>
}

export interface SelectProps {
    class?: string
    style?: Style
    items: any[]
    index?: number
    onChange?: (item: any) => void
}

export const Select = ({ class: classProp, items, index, onChange, style }: SelectProps) => {
    index = index || 0
    const [selectedItem, setSelectedItem] = useState(items[index])

    useEffect(() => {
        onChange && onChange(selectedItem)
    }, [selectedItem])

    return <Listbox class={`relative ${classProp}`} items={items} index={index} onChange={setSelectedItem}>
        <Listbox.Button class={`default-bg-color active-text-color bold rounded-sm px-[12px] py-[10px] flex-row justify-between`}>
            <div class="">{selectedItem.name}</div>
            <FAIcon name="down-dir" class="active-text-color translate-y-1" />
        </Listbox.Button>
        <Listbox.Options class="default-bg-color default-text-color rounded-sm py-2 mt-2">
            {items.map((item, i) => (
                <Listbox.Option index={i} class={`hover:hover-bg-color hover:active-text-color px-[12px] py-[10px] flex-row justify-between`} item={item}>
                    {({ selected }) => <Fragment>
                        <div class={`bold ${selected ? 'active-text-color' : ''}`}>
                            {item.name}
                        </div>
                        {selected ? <FAIcon name="ok" class="active-text-color translate-y-1" /> : null}
                    </Fragment>}
                </Listbox.Option>
            ))}
        </Listbox.Options>
    </Listbox>
}