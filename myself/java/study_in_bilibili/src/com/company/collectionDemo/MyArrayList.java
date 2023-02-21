package com.company.collectionDemo;

import java.util.Arrays;

public class MyArrayList<E> {
    Object[] obj = new Object[10];
    int size;
    public boolean add(E e) {
        obj[size++] = e;
        return true;
    }

    public E get(int index) {
        return (E) obj[index];
    }

    public <K> K test(K key) {
        return key;
    }

    @Override
    public String toString() {
        return "MyArrayList{" +
                "obj=" + Arrays.toString(obj) +
                '}';
    }
}
