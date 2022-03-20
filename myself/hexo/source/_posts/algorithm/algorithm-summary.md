---
title: algorithm/summary
date: 2022-03-13 09:34:18
author: flygg123
categories: 
           - [algorithm,Summary]
---

# 排序算法稳定性及其汇总

## 同样值得个体，如果不因为排序而改变相对次序，就是这个培训有稳定性。

## 不具备稳定性的排序
``` text
选择排序、快速排序、堆排序
```
## 具备稳定性的排序
``` text
冒泡排序、插入排序、归并排序、一切桶排序思想下的排序
```
``` text
              时间复杂度      空间复杂度      稳定性
选择            O(N²)           O(1)          没有
冒泡            O(N²)           O(1)          有
插入            O(N²)           O(1)          有
归并           O(N*logN)        O(N)          有
快排           O(N*logN)       O(logN)        没有
堆             O(N*logN)        O(1)          没有
```
> 通常使用快排