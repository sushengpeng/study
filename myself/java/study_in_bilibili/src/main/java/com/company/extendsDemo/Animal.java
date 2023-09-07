package com.company.extendsDemo;

public class Animal {
    public String name;

    public String getName() {
        return name;
    }

    public Animal() {
    }

    public Animal(String name) {
        this.name = name;
        this.eat();
        this.drink();
    }

    public void setName(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.printf("%s去吃饭了\n", name);
    }
    public void drink() {
        System.out.printf("%s去喝水了\n", name);
    }
}
