package com.company.throwExceptionDemo;

import com.company.interfaceDemo.Inter;

import java.util.InputMismatchException;

public class GirlFriend {
    private String name;
    private int age;

    public GirlFriend(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public GirlFriend() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) throws Exception {
        if (name == null) {
            throw new NullPointerException("name不可为空");
        } else if (name.length() < 3 || name.length() > 10) {
            throw new Exception("name长度请限制在3~10之间");
        } else {
            this.name = name;
        }
    }

    public int getAge() {
        return age;
    }

    public void setAge(String age) throws InputMismatchException {
        System.out.println(age);
        // shift + f6 局部替换
        // int i = Reg
        // this.age = i;
    }
}
