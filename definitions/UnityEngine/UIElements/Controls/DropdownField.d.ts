

declare module "UnityEngine/UIElements" {
    import { List } from "System/Collections/Generic"

    export class DropdownField extends PopupField<string> {
        constructor()
        constructor(label: string)
        constructor(choices: List<string>, defaultValue: string, formatSelectedValueCallback: (str: string) => string, formatListItemCallback: (str: string) => string)
        constructor(label: string, choices: List<string>, defaultValue: string, formatSelectedValueCallback: (str: string) => string, formatListItemCallback: (str: string) => string)
        constructor(choices: List<string>, defaultIndex: number, formatSelectedValueCallback: (str: string) => string, formatListItemCallback: (str: string) => string)
        constructor(label: string, choices: List<string>, defaultIndex: number, formatSelectedValueCallback: (str: string) => string, formatListItemCallback: (str: string) => string)
    }

}