package com.company.setDemo;

import com.company.student.Student;

import java.util.*;

/**
 * HashSet:         无序、不重复、无索引
 * LinkedHashSet:   有序、不重复、无索引
 * TreeSet:         可排序、不重复、无索引
 */
public class setTest {
    public static void main(String[] args) {
        // 自定义对象需要重写hashCode 和 equals方法
        Set<String> setTest = new HashSet<>();
        setTest.add("hello");
        setTest.add(" world");
        /*
        hashSet 一开始是16*0.75
        在添加元素时会计算int index = (数组长度 - 1) & hashCode 得到索引值
        若值不存在直接插入
        若存在jdk1.8之前
        旧元素在后新元素在前 jdk1.8之后新元素在后
        若链表长度大于8且数组长度大于64时 链表转化为红黑树 提高查询效率
        HashSet集合底层采取哈希表存储数据
        哈希表是一种对于增删改查数据性能都较好的结构
        */
        /**
         * 哈希值:
         * 对象的整数表现形式
         * 1，如果没有重写hashCode方法，计算出的哈希值是不同的
         * 2，如果已经重写hashcode方法，不同的对象只要属性值相同，计算出的哈希值就是一样的
         * 3，但是在小部分情况下，不同的属性值或者不同的地址值计算出来的哈希值也有可能一样。 (哈希碰撞) “abc”.hashCode() "acD".hashCode()
         */
        System.out.println(setTest);
        /**
         * LinkedHashSet底层原理
         * 有序、不重复、无索引。
         * 这里的有序指的是保证存储和取出的元素顺序一致
         * 原理:底层数据结构是依然哈希表，只是每个元素又额外的多了一个双链表的机制记录存储的顺序。
         */
        LinkedHashSet<Student> lhs = new LinkedHashSet<>();
        Student student1 = new Student(1,"李明",22);
        Student student2 = new Student(1,"李明",23);
        Student student3 = new Student(1,"李明",24);
        Student student4 = new Student(1,"李明",22);
        lhs.add(student4);
        lhs.add(student3);
        lhs.add(student1);
        lhs.add(student2);
        System.out.println(lhs);
        /**
         * TreeSet的特点
         * 不重复、无索引、可排序
         * 可排序: 按照元素的默认规则 (有小到大)排序。
         * TreeSet集合底层是基于红黑树的数据结构实现排序的，增删改查性能都较好
         */
        /**
         * TreeSet的两种比较方式
         * 1、Javabean类实现Comparable接口指定比较规则
         * 2、比较器排序:创建TreeSet对象时候，传递比较器Comparator指定规则
         */
        TreeSet<Integer> ts = new TreeSet<>();
        ts.add(5);
        ts.add(2);
        ts.add(1);
        ts.add(4);
        ts.add(3);
        System.out.println(ts);
        TreeSet<Integer> ts1 = new TreeSet<>(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1-o2;
            }
        });
    }
}
