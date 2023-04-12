package com.company.methodsImport;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Test1 {
    public static void main(String[] args) {
        ArrayList<String> stringList = new ArrayList<>();
        Collections.addAll(stringList,"张三,23", "张怕,23", "张喜哦,23", "张看看,23", "张是,23");
        Student[] students = stringList
                .stream()
                .map(Student::new)
                .toArray(Student[]::new);
        // .map(s -> new Student(s.split(",")[0], Integer.parseInt(s.split(",")[1])))
        // .collect(Collectors.toList());
        System.out.println(students);
        int[] arr = {1,2,3,4,5,6,7,8};
        // ctrl + alt + t 创建包裹部分
        // ctrl + shift + t 创建测试类
        try {
            System.out.println(arr[10]);
            System.out.println(2/0);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("索引越界");
        } catch (ArithmeticException e) {
            System.out.println("算术异常");
        }
    }
}
