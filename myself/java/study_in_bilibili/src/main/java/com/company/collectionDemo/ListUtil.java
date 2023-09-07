package com.company.collectionDemo;

import java.util.ArrayList;

public class ListUtil {
    private ListUtil() {}
    /**
     * 参数一： 集合
     * 参数二：要添加的元素
     */
    public static <E> void addAll(ArrayList<E> list,E item) {
        list.add(item);
    }
    public static <E> void addAll(ArrayList<E> list,E ... items) {
        for (E item : items) {
            list.add(item);
        }
        // list.addAll(items);
    }
}
