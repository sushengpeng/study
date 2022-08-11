interface Demo {
    a: string,
    b: string,
    c: number
}
type myPick<T, K extends keyof T> = {
    [P in K]: T[P] 
}
type DemoPreview = myPick<Demo, 'a'>
const demo1: DemoPreview = {
    a: "hello",
}