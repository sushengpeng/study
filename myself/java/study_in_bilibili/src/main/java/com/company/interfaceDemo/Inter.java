package com.company.interfaceDemo;

public interface Inter {
    public static final int a = 1;
    public static void show(){
        System.out.println("接口中得静态show方法");
        show4();
    }
    public default void show2() {
        System.out.println("接口中得默认show2方法");
    }
    public abstract void show1();

    // 静态的私有方法，给静态方法服务
    public static void show4() {
        System.out.println("接口中得静态show4方法");
    }

    // 普通得私有方法是给默认方法服务得
    private void show5() {
        System.out.println("接口中得静态show5方法");
    }
    public default void show6() {
        show5();
    }
}
