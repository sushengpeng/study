interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}
type NameOrId<T extends string | number> = T extends number ? IdLabel : NameLabel