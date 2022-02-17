type Point = {
  x: number
  y: number
}
type P = keyof Point
const p1: P = 'x'
const p2: P = 'y'
const p3: P = '1'