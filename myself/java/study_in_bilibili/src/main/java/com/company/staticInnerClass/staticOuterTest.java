package com.company.staticInnerClass;

public class staticOuterTest {
    public static void main(String[] args) {
        StaticOuter staticOuter = new StaticOuter();
        StaticOuter.Inner.show();
        System.out.println(StaticOuter.a);
        StaticOuter.Inner staticOi = new StaticOuter.Inner();
        staticOi.show1();
        new Inter() {

            @Override
            public void methods1() {
                System.out.println("method1");
            }

            @Override
            public void methods2() {
                System.out.println("method2");
            }

            @Override
            public void methods3() {
                System.out.println("method3");
            }
        }.methods1();
    }
}
