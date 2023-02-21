package com.company.stringDemo;

import java.util.Scanner;

// 键盘录入一个字符串，使用程序实现在控制台遍历该字符串
public class StringInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入字符串");
        String input = scanner.next();
        String[] list = input.split("");
        for (String s : list) {
            System.out.println(s);
        }
    }
}
