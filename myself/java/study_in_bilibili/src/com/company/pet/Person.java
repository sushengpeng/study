package com.company.pet;

public class Person extends Animal {
    public Person() {
    }

    public Person(String name, int age) {
        super(name, age);
    }

    // public void keepPet(Cat cat, String something) {
    //     // System.out.printf("年龄为25岁的老李养了一只灰颜色的3岁的猫3岁的灰颜色的猫眯着眼睛侧着头吃鱼");
    //     System.out.printf("%s养了一只%s眯着眼睛侧着头吃%s\n", getInfo(), cat.getInfo(), something);
    // }
    // public void keepPet(Dog dog, String something) {
    //     // System.out.printf("年龄为25岁的老李养了一只灰颜色的3岁的猫3岁的灰颜色的猫眯着眼睛侧着头吃鱼");
    //     System.out.printf("%s养了一只%s眯着眼睛侧着头吃%s\n", getInfo(), dog.getInfo(), something);
    // }
    public void keepPet(Animal animal, String something) {
        // animal.eat(something);
        if (animal instanceof Dog dog) {
            // System.out.printf("%s养了%s，它正在前腿死死的抱住骨头猛吃%s\n", getInfo(), dog.getInfo(), something);
            dog.eat(something);
        } else if (animal instanceof Cat cat) {
            // System.out.printf("%s养了%s，它正在眯着眼睛侧着头吃%s\n", getInfo(), cat.getInfo(), something);
            cat.eat(something);
        }
    }
}
