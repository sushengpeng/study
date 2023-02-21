package com.company.collectionTest;


import com.company.staticDemo.Student;

import java.util.ArrayList;

public class Test1 {
    public static void main(String[] args) {
        ArrayList<Student> studentList = new ArrayList<Student>();
        studentList.add(new Student("李明",22,'男'));
        studentList.add(new Student("王五",22,'女'));
        studentList.add(new Student("张三",22,'男'));
        studentList.add(new Student("吴二",22,'女'));
        studentList.add(new Student("谢一",22,'男'));
        int size = studentList.size();
        int random = (int) (Math.random() * size);
        Student student = studentList.get(random);
        System.out.println(student);
    }
}
