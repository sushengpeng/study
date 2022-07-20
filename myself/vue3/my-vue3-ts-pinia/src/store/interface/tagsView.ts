export type DropdownItem = {
    contextMenuClickId: number,
    txt: string,
    affix: boolean,
    icon: string,
    isDisabled?: boolean
}
export interface tagsViewState{
    tabsMenuValue: string,
    tabsMenuList: TagsViewMenu.MenuOptions[],
    dropdownList: DropdownItem[]
}

