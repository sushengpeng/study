package com.company.thread;

public class threadDemo2 {
    /**
     * 1、继承Thread类的方式进行实现
     * 2、实现Runnable接口的方式进行实现
     * 3、利用Callable接口和Future接口方式实现
     */
    /**
     * 多线程的第一种启动方式:
     * 1.自己定义一个类继承Thread
     * 2.重写run方法
     * 3。创建子类的对象，并启动线程
     */
    public static void main(String[] args) {
        MyThread2 mt = new MyThread2();
        Thread t1 = new Thread(mt);
        t1.setName("t1");
        Thread t2 = new Thread(mt);
        t2.setName("t2");
        t1.start();
        t2.start();
        System.out.println(t1.getPriority());
    }
}
