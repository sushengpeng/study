package com.company.functionDemo;

import lombok.Data;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class demo1 {
    /**
     * 练习1:集合中存储一些字符串的数据
     * 比如:张三,23收集到Student类型的数组当中(使用方法引用完成)
     *
     * @param args
     */
    public static void main(String[] args) {
        ArrayList<String> studentList = new ArrayList<String>();
        Collections.addAll(studentList, "张1,21", "张2,22", "张3,23");
        List<Student> list = studentList.stream().map(Student::new).toList();
        System.out.println(list);
    }
}
