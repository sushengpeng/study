package com.company.thread;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class threadDemo3 {
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
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        MyThread3 myCallback = new MyThread3();
        FutureTask<String> future = new FutureTask<String>(myCallback);
        Thread myThread = new Thread(future);
        myThread.setName("myThread");
        myThread.start();
        String result = future.get();
        System.out.println(result);
    }
}
