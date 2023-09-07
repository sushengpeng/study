package com.company.impotDemo;

import com.company.pet.Person;

/**
 * 使用同一个包中的类时，不需要导包。
 * 使用java.lang包中的类时，不需要导包。
 * 其他情况都需要导包
 * 如果同时使用两个包中的同名类，需要用全类名
 */
public class Test {
    public static void main(String[] args) {
        Person person = new Person("王子鸣",11);
    }
}
