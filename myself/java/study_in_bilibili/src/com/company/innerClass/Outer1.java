package com.company.innerClass;

public class Outer1 {
    private int a = 10;
    class Inner {
        private int a = 20;
        public void show() {
            int a = 30;
            System.out.println(a);
            System.out.println(this.a);
            System.out.println(Outer1.this.a);
        }
    }
}
