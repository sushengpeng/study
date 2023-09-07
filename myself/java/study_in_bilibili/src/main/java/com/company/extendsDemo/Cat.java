package com.company.extendsDemo;

public class Cat extends Animal {
    public void catchMouse() {
        System.out.printf("%s会抓老鼠\n", name);
    }

    public Cat(String name) {
        super(name);
        this.catchMouse();
    }
}
