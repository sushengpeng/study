package com.company.baseDemo;

public class StudentTest {
    public static void main (String[] args) {
        Student s = new Student("小小星尘");
        Student s1 = new Student();
        System.out.println(s);
        System.out.println(s1);
        s1.setName("小小星尘1");
        System.out.println(s.getName());
        System.out.println(s1.getName());
    }
}
