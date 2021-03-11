package com.company;

import java.util.Scanner;

public class IfDemo {
    public static void main(String[] args) {
        /*
        当if只有一行java语句的时候可以省略{}
         */
        if (true) {
            //这里在编译的时候会自动加上{}如果下面还有java语句的话还会继续执行但是到else的时候会报错
            System.out.println("成功了");
            // System.out.println("这里页面也没有问题");
        } else {
            System.out.println("报错了");
        }
        Scanner i = new Scanner(System.in);
        int b = i.nextInt();
        /*
        switch语句中b可以为int和string类型
        break不是必须的，default也不是必须的
        如果没有break会发生case穿透的情况，代码会继续向下执行
         */
        switch (b) {
            case 1:
                System.out.println("输入1");
                break;
            case 2:
                System.out.println("输入2");
                break;
            case 3:
                System.out.println("输入3");
                break;
            case 4:
                System.out.println("输入4");
                break;
            default:
                System.out.println("默认输入");
        }
        
    }
}
