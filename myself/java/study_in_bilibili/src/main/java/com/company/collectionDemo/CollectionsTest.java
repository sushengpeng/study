package com.company.collectionDemo;

import java.util.ArrayList;
import java.util.Collections;

public class CollectionsTest {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        Collections.addAll(list,"test","teste1","teste2","test3");
        Collections.shuffle(list);
        System.out.println(list);

        ArrayList<Integer> list1 = new ArrayList<Integer>();
        Collections.addAll(list1,1,2,3,4,5,6,7,8,9,10);
        System.out.println(list1);
        Collections.shuffle(list1);
        System.out.println(list1);
        int i = Collections.binarySearch(list1, 3);
        System.out.println(10);

        list1.sort((o1, o2) -> {
            return o2 - o1;
        });
        System.out.println(list1);

        ArrayList<Integer> list2 = new ArrayList<Integer>();
        Collections.copy(list2,list1);
        System.out.println(list2);
    }
}
