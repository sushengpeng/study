package com.company.functionDemo;

import lombok.Data;

@Data
public class Student {
    String name;
    Integer age;
    public Student(String str) {
        String[] list = str.split(",");
        this.name = list[0];
        this.age = Integer.parseInt(list[1]);
    }
}
