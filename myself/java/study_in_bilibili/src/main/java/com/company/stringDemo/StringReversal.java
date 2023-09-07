package com.company.stringDemo;

import java.util.Scanner;
/*
    定义一个方法，实现字符串反转
    键盘录入一个字符串，调用该方法后，在控制台输出结果
    例如，键盘录入 abc，输出结果 cba
 */
public class StringReversal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入字符串");
        String string = scanner.next();
        int len = string.length();
        char[] chList = new char[len];
        for (int i = len; i > 0; i--) {
            System.out.println(i);
            chList[len-i] = string.charAt(i-1);
        }
        String string1 = new String(chList);
        System.out.println(string1);
    }
}
