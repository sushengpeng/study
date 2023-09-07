package com.company.thread;

public class Ticket extends Thread {
    static int ticketCount = 0;
    // static Object obj = new Object();
    @Override
    public void run() {
        while (true) {
            // 唯一的锁对象
            // 同步代码块
            synchronized (Ticket.class) {
                if (ticketCount < 100) {
                    try {
                        Ticket.sleep(100);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    ticketCount++;
                    System.out.println(getName() + " 买了第" + ticketCount + "张票");
                } else {
                    break;
                }
            }
        }
    }
}
