package com.company.functionDemo;

import java.util.Arrays;
import java.util.Comparator;
import java.util.function.Function;

public class functionDemo1 {
    public static void main(String[] args) {
        Integer[] arr = {1,2,3,4,5,6,7,8,9};
        Arrays.sort(arr, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2 - o1;
            }
        });
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr, (Integer o1, Integer o2) -> o1 - o2);
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr, functionDemo1::subtraction);
        System.out.println(Arrays.toString(arr));
    }
    public static int subtraction(int o1, int o2) {
        return o2 - o1;
    }
}

