package com.company.pet;

import java.util.StringJoiner;

public class Animal {
    private String name;
    private int age;

    public Animal() {
    }

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void eat(String someThing) {
        System.out.printf("%s正在吃%s,\n", name, someThing);
    }

    public String getInfo() {
        return "年龄为" + this.getAge() + "的" + this.getName();
    }
}
