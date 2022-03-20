---
title: 二进制计算
date: 2022-02-26 19:54:50
author: flygg123
categories: 
           - [algorithm,Binary]
---

# 问题：给定一个数组，其中有两种数出现了奇数次，其余的数出现了偶数次，怎么得到奇数次的数

## 例如给定 `[2, 4, 3, 2, 5, 4]` 将会得到 `[5,4]`

### 基础知识：

1. `&` 且 都为1为真
2. `^` 异或 有两个不相同为真 
3. `|` 或 有一个为1为真
4. 计算规律
    ```javascript
    a ^ a = 0
    0 ^ a = a
    (a ^ b) ^ c = a ^ (b ^ c)
    ``` 
5. 用二进制的方式实现交换

    ```javascript
    a = 1
    b = 2
    c = a ^ b
    a = c ^ a
    b = c ^ b
    ```
6. 取某一位数的最右边的1： a^(-a) => a^(~a+1)
### 实现思路
1. 由于其余数是偶数次，所以将所有的数进行异或运算的时候可以不用考虑`（a ^ a =0）`
2. 设所有数异或的结果为eor, 这两个数分别为a,b,即`eor = a ^ b`
3. 由于`a!==b`,所以`eor!==0`,即eor中的某一位为1。
4. 那么排除偶数次的数之外，奇数次中的数也可以分为两类，一个是第某位为一的数，另外一个为零，所以只需要判断这个数第某位是否为1

### 实现代码

```javascript
function oddTimeNum2(arr: number[]) {
  let eor: number = 0
  let onlyOne: number = 0
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]
  }
  let rightOne: number = eor & (~eor + 1)
  for (let i = 0; i <= arr.length; i++) {
    if ((arr[i] & rightOne) == 0) {
      onlyOne ^= arr[i]
    }
  }
  console.log(onlyOne + " " + (eor ^ onlyOne));

}
let arr: number[] = [2, 4, 3, 2, 5, 4]
oddTimeNum2(arr)

```





