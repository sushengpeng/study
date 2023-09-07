package com.company.streamDemo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.stream.Stream;

public class Demo1 {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list, "1", "2", "3", "4", "5", "6", "7", "8", "9");
        list.stream().forEach(s -> System.out.println(s));
        HashMap<String, Integer> hm = new HashMap<>();
        hm.put("aaa", 111);
        hm.put("bbb", 222);
        hm.put("ccc", 333);
        hm.put("ddd", 444);
        hm.entrySet().stream().forEach(item-> System.out.println(item));
        int[] intList = { 111, 222, 333, 444};
        Arrays.stream(intList).forEach(item -> System.out.println(item));
        Stream.of(1,2,3,4,5,6,7,8,9).forEach(item -> System.out.println(item));
        // Stream.of(intList).forEach(item -> System.out.println(item));
    }
}
