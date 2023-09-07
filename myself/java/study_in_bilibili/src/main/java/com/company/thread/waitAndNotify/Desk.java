package com.company.thread.waitAndNotify;

public class Desk {
    // 是否有面条 0: 没有面条 1: 有面条
    public static int foodFlag = 0;
    public static int count = 10;
    public static final int countTotal = 10;
    public static Object lock = new Object();
}
