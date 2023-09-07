package com.company.functionDemo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class demo3 {
    /**
     * 练习1:集合中存储一些字符串的数据
     * 比如:张三,23收集到Student类型的数组当中(使用方法引用完成)
     *
     * @param args
     */
    public static void main(String[] args) {
        ArrayList<Student> studentList = new ArrayList<Student>();
        Collections.addAll(studentList, new Student("张1,11"),new Student("张2,22"), new Student("张3,23"));
        String[] array = studentList.stream().map(Student::getName).toArray(String[]::new);
        System.out.println(Arrays.toString(array));
    }
}
