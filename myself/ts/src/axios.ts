// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
  constructor(executor: any) {
    executor(this.resolve, this.reject)
  }
  resolve() {
    console.log(1)
  }
  reject() {
    console.log(2)
  }
}
let mypromise = new myPromise()