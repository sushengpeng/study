package com.company.functionDemo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class demo2 {
    /**
     *练习2: 创建集合添加学生对象，学生对象属性:name，age
     *      只获取姓名并放到数组当中(使用方法引用完成)
     */
    public static void main(String[] args) {
        ArrayList<String> studentList = new ArrayList<String>();
        Collections.addAll(studentList, "张1,21", "张2,22", "张3,23");
        List<Student1> list = studentList.stream().map(Student1::new).toList();
        System.out.println(list);
    }
}
