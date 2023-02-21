package com.company.collectionDemo;

import java.util.ArrayList;
import java.util.Collection;

public class collectionTest {
    public static void main(String[] args) {
        Collection<String> collection = new ArrayList<>();
        collection.add("hello");
        collection.add(" world");
        System.out.println(collection);
        collection.remove("hello");
        System.out.println(collection);
        // collection.clear();
        boolean hasHello = collection.contains("hello");
    }
}
