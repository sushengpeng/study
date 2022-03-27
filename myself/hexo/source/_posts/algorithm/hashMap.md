---
title: hashMap
date: 2022-03-21 21:32:23
author: flygg123
categories: 
           - [algorithm]
---
## 哈希表的简单介绍 __`hashMap`__
1. 哈希表在使用层面上可以理解为一种集合结构
2. 如果只有key,没有伴随数据value ,可以使用HashSet 结构(C++ 中叫UnOrderedSet)
3. 如果既有key,又有伴随数据value ,可以使用HashMap 结构(C++ 中叫UnOrderedMap)
4. 有无伴随数据,是HashMap 和HashSet 唯一的区别,底层的实际结构是一回事
5. 使用哈希表增(put) 、删(remove) 、改(put) 和查(get) 的操作,可以认为时间复杂度为O(1) ,但是常数时间比较大
6. 放入哈希表的东西,如果是基础类型,内部按值传递,内存占用就是这个东西的大小刀放入哈希表的东西,如果不是基础类型,内部按引用传递,内存占用是这个东西内存地址的大小

## 有序表的简单介绍 __`treeSet`__
1. 有序表在使用层面上可以理解为一种集合结构
2. 如果只有key,没有伴随数据value,可以使用TreeSet 结构(C++ 中叫OrderedSet)
3. 如果有key,又有伴随数据value,可以使用TreeMap 结构(C++ 中叫OrderedMap)
4. 有无伴随数据,是TreeSet 和TreeMap唯一的区别,底层的实际结构是一回事
5. 有序表和哈希表的区别是,有序表把key按照顺序组织起来,而哈希表完全不组织
6. 红黑树、AVL树、size-balance-tree 和跳表等都属于有序表结构,只是底层具体实现
不同
7. 放入哈希表的东西,如果是基础类型,内部按值传递,内存占用就是这个东西的大小
刀放入哈希表的东西,如果不是基础类型,必须提供比较器,内部按引用传递,内存占
用是这个东西内存地址的大小
8. 不管是什么底层具体实现,只要是有序表,都有以下固定的基本功能和固定的时间复
杂度

## 有序表的固定操作
1. void put (K key, V value): 将一个(key , value) 记录加入到表中, 或者将key 的记录
更新成va ] ueo
1. V get (K key): 根据给定的key , 查询value 并返回。
2. void remove (K key): 移除key 的记录。
3. boolean containsKey (K key): 询问是否有关于key 的记录。
4. K firstKey(): 返回所有键值的排序结果中, 最左（ 最小） 的那个。
5. K lastKey(: 返回所有键值的排序结果中, 最右（ 最大） 的那个。
6. K floorKey(K key): 如果表中存入过key , 返回key ； 否则返回所有键值的排序结果中,key 的前一个。
7. K ceilingKey (K key): 如果表中存入过key , 返回key ； 否则返回所有键值的排序结果中,key 的后一个。
以上所有操作时间复杂度都是O(logN) , N 为有序表含有的记录数



