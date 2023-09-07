package com.company.thread;

public class threadDemo5 {
    public static void main(String[] args) {
        Thread thread1 = new MyThread();
        Thread thread2 = new MyThread();
        thread1.setName("1");
        thread2.setName("2");
        // 设置为守护线程 线程thread1结束后thread2页面随后结束（但不一定马上结束）
        thread1.setDaemon(true);
        thread1.start();
        thread2.start();
    }
}
