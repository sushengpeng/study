package com.company.mapDemo;

import java.util.HashMap;
import java.util.Map;

public class Test1 {
    public static void main(String[] args) {
        Map<Integer,Integer> studentMap = new HashMap<>();
        // studentMap.put(new Student(1,"zhangsan",11),"111");
        // studentMap.put(new Student(2,"lisi",22),"222");
        // studentMap.put(new Student(3,"wangwu",33),"333");
        // studentMap.put(new Student(3,"wangwu",33),"333");
        for (int i = 0; i < 100000; i++) {
            studentMap.put(1,i);
        }
        // System.out.println(studentMap);
        // for (Map.Entry<Student, String> studentStringEntry : studentMap.entrySet()) {
        //     System.out.println(studentStringEntry.getKey());
        // }
    }
}
