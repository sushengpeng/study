package com.company.mapDemo;

import java.util.*;

public class mapTest {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        map.put("a",1);
        map.put("b",2);
        map.put("c",3);
        map.put("d",4);
        Map<String, Integer> stringIntegerMap = Map.copyOf(map);
        System.out.println(stringIntegerMap);
        // stringIntegerMap.put("a",1);

        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getValue());
            System.out.println(entry.getKey());
        }
        Map<String,String> lhm = new LinkedHashMap<>();
        lhm.put("a","11");
        lhm.put("c","22");
        lhm.put("a","33");
        lhm.put("b","44");
        System.out.println(lhm);
        Map<Student,String> sts = new TreeMap<>((o1,o2) -> {
            return o1.getAge() - o2.getAge();
        });
        sts.put(new Student(1,"黎明",22),"asldj");
        sts.put(new Student(2,"王五",11),"asldj");
        sts.put(new Student(3,"李四",28),"asldj");
        System.out.println(sts);
    }
}
