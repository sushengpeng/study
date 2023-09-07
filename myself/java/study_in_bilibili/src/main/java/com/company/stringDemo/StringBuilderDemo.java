package com.company.stringDemo;

import java.util.Scanner;

public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("11133333333333333333333335555555553");
        sb.append(true);
        sb.append(2.32);
        // sb.reverse();
        String str = sb.toString();
        System.out.println(str);
        System.out.printf("容量是：%s",sb.capacity());
        System.out.printf("长度是：%s",sb.length());
        /*Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个字符串");
        String str = sc.next();
        String result = new StringBuilder().append(str).reverse().toString();
        if (result.equals(str)) {
            System.out.println("该字符串是回文字符串");
        } else {
            System.out.println("该字符串不是回文字符串");
        }*/
    }
}
