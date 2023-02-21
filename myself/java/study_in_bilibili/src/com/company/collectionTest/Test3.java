package com.company.collectionTest;

import com.company.staticDemo.Student;

import java.util.ArrayList;

public class Test3 {
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
        while (!studentList.isEmpty()) {
            int size = studentList.size();
            int random = (int) (Math.random() * size);
            Student student = studentList.get(random);
            System.out.println(student);
            System.out.println(studentList.size());
            studentList.remove(random);
        }
    }
}
