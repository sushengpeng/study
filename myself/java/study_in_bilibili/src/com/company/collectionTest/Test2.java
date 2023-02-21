package com.company.collectionTest;


import com.company.staticDemo.Student;

import java.util.ArrayList;
import java.util.Iterator;

public class Test2 {
    public static void main(String[] args) {
        ArrayList<Student> studentList = new ArrayList<>();
        studentList.add(new Student("李明",22,'男'));
        studentList.add(new Student("王五",22,'女'));
        studentList.add(new Student("张三",22,'男'));
        studentList.add(new Student("吴二",22,'女'));
        studentList.add(new Student("谢一",22,'男'));
        studentList.add(new Student("阿萨大",22,'男'));
        studentList.add(new Student("觉得",22,'女'));
        studentList.add(new Student("幸存者",22,'男'));
        studentList.add(new Student("见过",22,'女'));
        studentList.add(new Student("亲戚",22,'男'));
        studentList.add(new Student("几乎覆盖",22,'男'));
        int size = studentList.size();
        ArrayList<Student> manStudents = new ArrayList<Student>();
        ArrayList<Student> womanStudents = new ArrayList<Student>();
        Iterator<Student> iterator = studentList.iterator();

        while (iterator.hasNext()) {
            Student student = iterator.next();
            if (student.getGender() == '男') {
                manStudents.add(student);
            } else {
                womanStudents.add(student);
            }
        }
        System.out.println(womanStudents);
        System.out.println(womanStudents);
        System.out.println(manStudents);
        boolean isMan = (double) Math.random() > 0.75;
        System.out.println(isMan);
        if (isMan) {
            int random = (int) (Math.random() * manStudents.size());
            Student student = manStudents.get(random);
            System.out.println(student);
        } else {
            int random = (int) (Math.random() * womanStudents.size());
            Student student = womanStudents.get(random);
            System.out.println(student);
        }
        // int random = (int) (Math.random() * size);
    }
}
