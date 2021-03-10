package com.company;

import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        /*
        代码执行到这里的时候会暂停等待用户输入
        用变量i来接受键盘中输入的变量
         */
        int i = 0;
        while (i != 11) {
            i = s.nextInt();
            System.out.println(i);
            System.out.println("请继续输入");
        }
    }
}
