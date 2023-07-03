import { classNames } from "classnames"
import { createContext, h } from "preact"
import { useContext, useEffect, useState } from "preact/hooks"
import { Style } from "preact/jsx"

export interface TabProps {
    name: string
    index: number
    class?: string | Function
    style?: Style
    children?: any
}

export interface TabGroupProps {
    class?: string
    style?: Style
    children?: any
    index?: number
    onChange?: (index: number) => void
}

export interface TabListProps {
    class?: string
    style?: Style
    children?: any
}

export interface TabPanelsProps {
    class?: string
    style?: Style
    children?: any
}

export interface TabPanelProps {
    class?: string
    style?: Style
    children?: any
}

const TabGroupContext = createContext({} as any)

export const Tab = ({ class: classProp, name, index, children, style }: TabProps) => {
    const { selectedTabIndex, setSelectedTabIndex } = useContext(TabGroupContext)

    function onClick() {
        setSelectedTabIndex(index)
    }

    return <div key={name} class={typeof classProp === "function" ? classProp({ selected: selectedTabIndex == index }) : classProp} onClick={onClick} style={style}>
        {typeof children === "function" ? children({ selected: selectedTabIndex == index }) : children}
    </div>
}

Tab.Group = ({ class: classProp, children, index, onChange, style }: TabGroupProps) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(index || 0)

    useEffect(() => {
        onChange && onChange(selectedTabIndex)
    }, [selectedTabIndex])

    return <TabGroupContext.Provider value={{ selectedTabIndex, setSelectedTabIndex }}>
        <div class={`${classProp}`} style={style}>{children}</div>
    </TabGroupContext.Provider>
}

Tab.List = ({ class: classProp, children, style }: TabListProps) => {

    return <div class={`${classProp}`} style={style}>{children}</div>
}

Tab.Panels = ({ class: classProp, children, style }: TabPanelsProps) => {
    const { selectedTabIndex, setSelectedTabIndex } = useContext(TabGroupContext)

    return <div class={`${classProp}`} style={style}>{children[selectedTabIndex]}</div>
}

Tab.Panel = ({ class: classProp, children, style }: TabPanelProps) => {

    return <div class={`${classProp}`} style={style}>{children}</div>
}

export interface ExampleTabsProps {
    class?: string
    style?: Style
}

const exampleTabs = [
    { label: "Tab 1", content: "Panel 1" },
    { label: "Tab 2", content: "Panel 2" },
    { label: "Tab 3", content: "Panel 3" },
]

export const ExampleTabs = ({ class: classProp, style }: ExampleTabsProps) => {

    function onChange(index: number) {
        log(`Tabs index changed to ${index}`)
    }

    return <Tab.Group class={`flex-col w-[500px] ${classProp}`} onChange={onChange} style={style}>
        <Tab.List class={`flex-row justify-between rounded-md bg-black/50 p-1 mb-2`}>
            {exampleTabs.map((tab, index) =>
                <Tab name={tab.label} index={index} class={({ selected }) => (classNames(`flex-row rounded-md text-white/80 items-center bold justify-center p-3 transition-[background-color] duration-200`, selected ? `bg-white active-text-color` : `hover:bg-white/10`))} style={{ width: `${98 / exampleTabs.length}%` }}>{tab.label}</Tab>
            )}
        </Tab.List>
        <Tab.Panels>
            {exampleTabs.map((tab, index) =>
                <Tab.Panel class={`bg-white rounded-md p-5`}>{tab.content}</Tab.Panel>
            )}
        </Tab.Panels>
    </Tab.Group>
}