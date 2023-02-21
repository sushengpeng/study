package com.company.arrayListDemo;

import java.util.ArrayList;

public class Demo1 {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        System.out.print('[');
        for (int i = 0; i < list.size(); i++) {
            if (i != list.size() - 1) {
                System.out.printf("%s ,", list.get(i));
            } else {
                System.out.printf("%s", list.get(i));
            }
        }
        System.out.println("]");
    }
}
