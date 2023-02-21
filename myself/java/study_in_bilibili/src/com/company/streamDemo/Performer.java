package com.company.streamDemo;

import lombok.Data;

@Data
public class Performer {
    private String name;
    private int age;

    public Performer() {
    }

    public Performer(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
