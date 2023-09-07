package com.company.baseDemo;

public class GridFriendTest {

    public static void main(String args[]) {
        GridFriend s1 = new GridFriend();
        s1.setAge(111);
        s1.setName("名字");
        int age = s1.getAge();
        String name = s1.getName();
        System.out.println(age);
        System.out.println(name);
//        int age = s1.getAge();
    }
}
