interface Menu {
    'id'?: string,
    'pid'?: string,
    'name': string,
    'path': string,
    'icon'?: string,
    'sort'?: number,
    'children'?: Menu[] | []
}
