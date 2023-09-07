package com.company.functionDemo;

import lombok.Data;

@Data
public class Student1 {
    String name;
    public Student1(String str) {
        String[] list = str.split(",");
        this.name = list[0];
    }
}
