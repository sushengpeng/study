package com.company.interfaceDemo;

public class InterTest {
    public static void main(String[] args) {
        InterImpl impl = new InterImpl();
        Inter.show();
        impl.show1();
        impl.show2();
        System.out.println(Inter.a);
    }
}
