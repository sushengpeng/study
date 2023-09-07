package com.company.innerClass;

import java.util.Scanner;

public class OuterTest {
    public static void main(String[] args) {
        Outer outer = new Outer();
        System.out.println(outer.name);
        Outer.Inner oi = new Outer().new Inner();
        System.out.println(oi.name);
        Outer1.Inner oi1 = new Outer1().new Inner();
        oi1.show();
        Scanner scanner = new Scanner(System.in);
        scanner.next();
    }

}
