package com.company.collectionDemo;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class ListDemo {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list);
        Integer item = 2;
        list.remove(item);
        System.out.println(list);
        /**
         * 迭代器遍历
         * 列表迭代器遍历
         * 增强for遍历
         * Lambda表达式遍历
         * 普通for循环 (因为List集合存在索引L)
         */
        Iterator<Integer> iterator = list.iterator();
        while (iterator.hasNext()) {
            Integer value = iterator.next();
            System.out.println(value);
        }
        list.forEach((Integer i)-> {System.out.println(i);});
        list.forEach(System.out::println);
        MyArrayList<Integer> myList = new MyArrayList<>();
        myList.add(1);
        myList.add(2);
        myList.add(3);
        System.out.println(myList);
        String test = myList.test("test");
        ArrayList<Integer> utilList = new ArrayList<>();
        ListUtil.addAll(utilList,1,2,3,4,5);
        System.out.println(utilList);
        ArrayList<Integer> list2 = new ArrayList<>();
        ArrayList<Character> list3 = new ArrayList<>();
        ArrayList<String> list4 = new ArrayList<>();
        method(list2);
        // method(list3);
    }

    /**
     * 当泛型中我们希望确定传入的范围时
     *  ? extends E: 表示可以传递E或者E所有的子类类型
     *  ? super E: 表示可以传递E或者E所有的父类类型
     *
     * @param list
     */
    public static void method(ArrayList<Integer> list){

    }
}
