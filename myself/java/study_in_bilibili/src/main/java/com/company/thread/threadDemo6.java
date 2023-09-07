package com.company.thread;

public class threadDemo6 {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new MyThread();
        thread.setName("线程1");
        thread.join();
        thread.start();
        for (int i = 0; i < 10; i++) {
            System.out.println("main 线程进程" + i);
        }
    }
}
