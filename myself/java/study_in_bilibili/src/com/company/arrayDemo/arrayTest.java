package com.company.arrayDemo;

import java.util.Arrays;

public class arrayTest {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println("------------toString------------");
        System.out.println(Arrays.toString(arr));
        System.out.println(arr.length);
        System.out.println("------------binarySearch------------");
        System.out.println(Arrays.binarySearch(arr, 10));
        System.out.println(Arrays.binarySearch(arr, 22));
        System.out.println(Arrays.binarySearch(arr, 0));
        System.out.println("------------copyOf------------");
        int[] copyArr1 = Arrays.copyOf(arr, 20);
        copyArr1[0] = 100;
        int[] copyArr2 = Arrays.copyOf(arr, 2);
        System.out.println(Arrays.toString(copyArr1));
        System.out.println(Arrays.toString(copyArr2));
        System.out.println("------------fill------------");
        Arrays.fill(arr, 10);
        System.out.println(Arrays.toString(arr));
        System.out.println("------------sort------------");
        Integer[] arr3 = {1, 5, 2, 6, 3, 9, 8, 4, 7};
        // Arrays.sort(arr3);
        // Arrays.sort(arr3, new Comparator<Integer>() {
        //     @Override
        //     public int compare(Integer o1, Integer o2) {
        //         return o2 - o1;
        //     }
        // });
        /**
         * Lambda表达式的注意点:
         * 1.Lambda表达式可以用来简化醒名内部类的书写
         * 2.Lambda表达式只能简化函数式接口的匿名内部类的写法
         * 3.函数式接口:
         * 有且仅有一个抽象方法的接口叫做函数式接口，接口上方可以加@FunctionalInterface注解
         */
        Arrays.sort(arr3, ((Integer o1, Integer o2) -> o1 - o2));
        System.out.println(Arrays.toString(arr3));
        String[] arr4 = {"asd", "asdlajdasdl", "alksdjsa1231", "a"};
        Arrays.sort(arr4, ((s1, s2) -> s1.length() - s2.length()));
        System.out.println(Arrays.toString(arr4));
    }
}
