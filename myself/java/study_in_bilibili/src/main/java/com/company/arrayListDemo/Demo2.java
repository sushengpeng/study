package com.company.arrayListDemo;

import java.util.ArrayList;

public class Demo2 {
    public static void main(String[] args) {
        ArrayList<Student> grade = new ArrayList<Student>();
        Student student1  = new Student("王子鸣",18);
        Student student2  = new Student("李柏羽",20);
        Student student3  = new Student("齐兵",21);
        grade.add(student1);
        grade.add(student2);
        grade.add(student3);
        for (Student student : grade) {
            student.printStudent();
        }
    }
}
