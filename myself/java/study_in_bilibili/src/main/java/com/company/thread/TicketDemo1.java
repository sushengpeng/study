package com.company.thread;

public class TicketDemo1 extends Thread{
    static int ticketCount = 0;
    @Override
    public void run() {
        while (true) {
            if(method()) break;        }
    }

    private synchronized boolean method() {
        if(ticketCount == 100) {
            return true;
        } else {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            ticketCount ++;
            System.out.println(getName() + " 买了第" + ticketCount + "张票");
        }
        return false;
    }
}
