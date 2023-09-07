package com.company.thread;

public class MyThread1 implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            Thread t = Thread.currentThread();
            System.out.println(t.getName() +);
        }
    }
}
