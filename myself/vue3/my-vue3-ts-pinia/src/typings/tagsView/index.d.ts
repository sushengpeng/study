
// * Menu
declare namespace TagsViewMenu {
    interface MenuOptions {
        path: string;
        title: string;
        icon?: string;
        isLink?: string;
        close?: boolean;
        hide?: boolean;
        query?: object;
        children?: MenuOptions[];
    }
}

