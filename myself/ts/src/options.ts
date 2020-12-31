interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig) {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare)