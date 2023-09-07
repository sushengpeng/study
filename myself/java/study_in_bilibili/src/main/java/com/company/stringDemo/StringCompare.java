package com.company.stringDemo;

import java.util.Scanner;

public class StringCompare {
    public static void main(String[] args) {
        // 通过基本数据类型比较的是数据值
        // 通过引入数据类型比较的是地址值
        String s1 = "abc";
        String s2 = "abc";
        System.out.println(s1 == s2);

        String s3 = "abc";
        String s4 = new String("Abc");
        System.out.println(s3.equals(s4)); //比较字符串的内容
        System.out.println(s3.equalsIgnoreCase(s4)); //比较字符串的内容忽略大小写

        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入一个字符串");
        String s5 = scanner.next();
        System.out.println(s5.equals(s3));
    }
}
