package com.company.pet;

public class Cat extends Animal {
    private String color;

    public Cat(String color) {
        this.color = color;
    }

    public Cat(String name, int age, String color) {
        super(name, age);
        this.color = color;
    }
    @Override
    public String getInfo() {
        return "一只" + this.color + "颜色" + super.getAge() + "岁的猫" ;
    }
    public void catchMouse() {
        System.out.printf("%s正在抓老鼠\n", super.getName());
    }
}
