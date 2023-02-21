package com.company.userRegister;

public class Student extends People {
    public Student() {
    }

    public Student(String name, String id) {
        super(name, id, "学生的权限");
    }
}