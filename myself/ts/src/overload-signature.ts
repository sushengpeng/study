function fn(x: string): string
function fn(x: boolean): boolean
function fn<Type extends string | boolean>(x: Type): Type {

}