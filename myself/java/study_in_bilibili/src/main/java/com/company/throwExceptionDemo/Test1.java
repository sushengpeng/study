package com.company.throwExceptionDemo;

import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
        Boolean ScanNameSuccess = false;
        Boolean ScanAgeSuccess = false;
        while (!ScanNameSuccess) {
            System.out.println("请输入心仪女朋友的姓名：");
            Scanner sc = new Scanner(System.in);
            String next = sc.next();
            GirlFriend gf = new GirlFriend();
            try {
                gf.setName(next);
                ScanNameSuccess = true;
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        while (!ScanAgeSuccess) {
            System.out.println("请输入心仪女朋友的年龄：");
            Scanner sc = new Scanner(System.in);
            String next = sc.next();
            GirlFriend gf = new GirlFriend();
            try {
                gf.setAge(next);
                ScanAgeSuccess = true;
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
