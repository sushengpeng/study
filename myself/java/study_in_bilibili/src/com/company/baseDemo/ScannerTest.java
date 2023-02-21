package com.company.baseDemo;

import java.util.Scanner;


/*
nextInt(); 接收整数
nextDouble(); 接收小数
next(); 接收字符串
上面的遇到空格 制表符 回车会停止接受 把其他参数给下一个接受

nextLine(); 接受字符串
*/
public class ScannerTest {
    public static void main(String[] args) {
        System.out.println("请输入一个整数");
        Scanner s = new Scanner(System.in);
        int num1 = s.nextInt();
        System.out.println(num1);
        System.out.println("请输入一个整数");
        Scanner s1 = new Scanner(System.in);
        int num2 = s1.nextInt();
        System.out.println(num2);


        System.out.println("请输入一个整数");
        Scanner s3 = new Scanner(System.in);
        String num3 = s3.nextLine(); // ctrl+ alt + v
        System.out.println(num3);
    }
}
