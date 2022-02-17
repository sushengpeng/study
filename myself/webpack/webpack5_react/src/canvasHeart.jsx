import React, { Component } from 'react'

export default class canvasHeart extends Component {
  constructor(canvas, x, y) {
    this.ctx = canvas.getContext('2d');
    this.x = x;
    this.y = y;
  }

  draw() {
    const delta = 60;
    this.stroke(delta, delta);
  }

  stroke(dx, dy) {
    this.ctx.beginPath();
    this.ctx.save();
    //这里一定要先平移再旋转
    this.ctx.translate(this.x + dx, this.y + dy);
    //绘制的坐标系是从左上角到右下角
    this.ctx.rotate(Math.PI);
    //eval函数可以实现类似高级语言的反射效果
    eval(this.shape());
    this.ctx.fillStyle = 'red'
    this.ctx.fill();
    this.ctx.restore();
  }

  shape() {
    const part = 2 * Math.PI / 500;
    let t = 0;
    for (let i = 0; i < 500; i++) {
      t += part;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
      this.ctx.lineTo(x, y);
    }
  }

  lineTo(x, y) {
    requestAnimationFrame = () => {
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }
  componentDidMount() {
    console.log('执行');
    const canvas = document.querySelector('#heart');
    const heart = new Heart(canvas, 300, 300);
    heart.draw();
  }
      // <canvas id="heart" width="600" height="600">111</canvas>
  render() {
    return (
      <img src="./assets/image/img.png" />
    )
  }
}
