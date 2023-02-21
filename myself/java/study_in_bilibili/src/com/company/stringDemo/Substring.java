package com.company.stringDemo;

public class Substring {
    public static void main(String[] args) {
        String phone = "15672134244";
        String start = phone.substring(0, 3);
        String end = phone.substring(7);
        System.out.printf("%s **** %s", start, end);
    }
}
