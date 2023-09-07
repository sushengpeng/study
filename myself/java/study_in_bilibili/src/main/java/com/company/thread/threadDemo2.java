package com.company.thread;

public class threadDemo1 {
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
        MyThread myThread1 = new MyThread();
        MyThread myThread2 = new MyThread();
        myThread1.setName("myThread1");
        myThread2.setName("myThread2");
        myThread1.start();
        myThread2.start();
    }
}
