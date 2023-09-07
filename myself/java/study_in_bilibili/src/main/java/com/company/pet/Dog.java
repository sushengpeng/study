package com.company.pet;

public class Dog extends Animal {
    private String color;

    public Dog() {
    }

    public Dog(String name, int age, String color) {
        super(name, age);
        this.color = color;
    }

    @Override
    public String getInfo() {
        return "一只" + this.color + "颜色" + super.getAge() + "岁的狗" ;
    }

    public void lookHome() {
        System.out.printf("%s正在看家\n", super.getName());
    }
}
