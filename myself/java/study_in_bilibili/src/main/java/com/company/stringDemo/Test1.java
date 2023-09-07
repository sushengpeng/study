package com.company.stringDemo;

import java.util.Scanner;
import java.util.StringJoiner;

public class Test1 {
    public static void main(String[] args) {
        while (true) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("请输入一段字符串");
            String str = scanner.next();
            boolean flag = isValid(str);
            if(flag) {
                String result = getResult(str);
                System.out.println(result);
                break;
            } else {
                System.out.println("当前输入不符合规则，请重新输入");
                continue;
            }
        }
    }

    public static char[] getCharList() {
        char[] charList = new char[10];
        charList[0] = ' ';
        charList[1] = 'Ⅰ';
        for (int i = 2; i < 10; i++) {
            charList[i] = (char) (charList[1] + (i - 1));
        }
        return charList;
    }

    public static boolean isValid(String str) {
        if (str.length() > 9) {
            return false;
        }
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c < '0' || c > '9') {
                return false;
            }
        }
        return true;
    }
    public static String getResult(String str) {
        StringJoiner sb = new StringJoiner(" ");
        char[] charList = getCharList();
        for (int i = 0; i < str.length(); i++) {
            char item = str.charAt(i);
            int number = item - 48;
            // char character = charList[Integer.parseInt(String.valueOf(item))];
            char character = charList[number];
            sb.add(character + "");
        }
        return sb.toString();
    }
}
