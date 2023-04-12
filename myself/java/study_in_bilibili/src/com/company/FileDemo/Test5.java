package com.company.FileDemo;

import java.io.File;
import java.util.*;

public class Test5 {
    public static void main(String[] args) {
        File file = new File("C:\\test");
        File[] files = file.listFiles();
        Map<String, Integer> map = new HashMap<>();
        // Collections.concat(getNameMap(files));
        map = getNameMap(files,map);
        System.out.println(map);
        // System.out.println(countList);
    }

    public static Map<String, Integer> getNameMap(File[] file, Map<String, Integer> map) {
        // Map<String, Integer> map = new HashMap<>();
        // Collection<String> list = new ArrayList<>();
        for (File listFile : file) {
            if (listFile.isDirectory()) {
                // Object merge = getNameMap(listFile.listFiles()).merge(key, value, (v1, v2) -> {
                //     int i1 = Integer.parseInt(v1.toString());
                //     int i2 = Integer.parseInt(v2.toString());
                //     return i1 + i2;
                // });
                // System.out.println(merge);
                // return map.forEach((key, value) -> );
                getNameMap(listFile.listFiles(), map);
            } else {
                String suffix = listFile.getName().split("\\.")[1];
                // list.add(suffix);
                Object o = map.get(suffix);
                int i = o == null ? 0 : Integer.parseInt(o.toString());
                map.put(suffix, i + 1);
            }
        }
        return map;
    }
}
