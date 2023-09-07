package com.company.thread;

public class threadDemo4 {
    public static void main(String[] args) {
        Thread thread1 = new MyThread();
        Thread thread2 = new MyThread();
        thread1.setPriority(1);
        thread2.setPriority(10);
        thread1.start();
        thread2.start();
        System.out.println(thread1.getPriority()); //获取优先级
    }
}
