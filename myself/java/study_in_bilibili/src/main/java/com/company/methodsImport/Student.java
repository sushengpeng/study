package com.company.methodsImport;

import lombok.Data;

@Data
public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Student(String s) {
        this.name = s.split(",")[0];
        this.age = Integer.parseInt(s.split(",")[1]);
    }
    public String nameJoinAge(Student student) {
        return student.getName() + "-" + student.getAge();
    }
}
