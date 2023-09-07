package com.company.stringDemo;

import java.util.StringJoiner;

public class StringJoinDemo {
    public static void main(String[] args) {
        StringJoiner sj = new StringJoiner(",","[","]");
        sj.add("1");
        sj.add("abc");
        sj.add("asdf");
        System.out.println(sj.length());
        String str = sj.toString();
        System.out.println(str);
    }
}
