function makeDate(timestamp: number): Date
function makeDate(y: number, m: number, d: number): Date 
function makeDate(yOrTimestamp: number, m?: number, d?: number): Date {
  if (m !== undefined && d !== undefined) {
    return new Date(yOrTimestamp, m, d)
  } else {
    return new Date(yOrTimestamp)
  }
}
const d1 = makeDate(1233131)
const d2 = makeDate(2020, 1, 22)