package com.company.functionDemo;

import java.util.ArrayList;
import java.util.Collections;

public class functionDemo2 {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        Collections.addAll(list, "1", "2", "3", "4", "5", "6", "7", "8", "9");
        // list.stream().map(new Function<String, Integer>() {
        //     @Override
        //     public Integer apply(String s) {
        //         int i = Integer.valueOf(s);
        //         return i;
        //     }
        // }).forEach(s -> System.out.println(s));
        list.stream().map(Integer::parseInt).forEach(System.out::println);
        // System.out.println(list);
    }
}

