package com.company.stringDemo;

import java.util.Scanner;

// 统计字符串
public class StringStatistics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("请输入一段字符\n");
        String string = scanner.next();
        int len = string.length();
        int smallCount = 0;
        int bigCount = 0;
        int otherCount = 0;
        int numberCount = 0;
        for (int i = 0; i < len; i++) {
            char c = string.charAt(i);
            if (c >= 'a' && c <= 'z') {
                smallCount++;
            } else if (c >= 'A' && c <= 'Z') {
                bigCount++;
            } else if (c >= '0' && c <= '9') {
                numberCount++;
            } else {
                otherCount++;
            }
        }
        System.out.printf("大写字母%s\n", bigCount);
        System.out.printf("小写字母%s\n", smallCount);
        System.out.printf("数字%s\n", numberCount);
        System.out.printf("其他%s\n", otherCount);
    }
}
