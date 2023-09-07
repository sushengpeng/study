package com.company.thread;

public class threadDemo8 {
    public static void main(String[] args) {
        TicketDemo1 t1 = new TicketDemo1();
        TicketDemo1 t2 = new TicketDemo1();
        TicketDemo1 t3 = new TicketDemo1();

        t1.setName("窗口1");
        t2.setName("窗口2");
        t3.setName("窗口3");

        t1.start();
        t2.start();
        t3.start();
    }
}
