interface Params {
  name: string;
  age?: number;
  large?: string;
  color?: string;
}
let params1: Params = {
  name: "111"
}
function getString(params: Params) {
  if (params.name) {
    console.log(params.name)
  }
  if (params.age) {
    console.log(params.age)
  }
  if (params.large) {
    console.log(params.large)
  }
  if (params.color) {
    console.log(params.color)
  }
}
getString(params1)