package com.company.streamDemo;

import java.util.Arrays;

public class Test1 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        Arrays.stream(arr).filter(i -> {
            if(i%2 == 0) return true;
            else return false;
        }).forEach(i -> System.out.println(i));
    }
}
