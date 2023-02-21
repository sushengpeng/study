package com.company.pet;

public class Test {
    public static void main(String[] args) {
        Person person1 = new Person("李梓萌",27);
        Dog dog1 = new Dog("二哈",3,"黄");
        Cat cat1 = new Cat("橘猫",2,"橘黄");
        System.out.println(person1.getInfo());
        System.out.println(dog1.getInfo());
        System.out.println(cat1.getInfo());
        person1.keepPet(dog1,"狗粮");
        person1.keepPet(cat1,"猫粮");
    }
}
