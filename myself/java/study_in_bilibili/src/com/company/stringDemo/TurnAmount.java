package com.company.stringDemo;

import java.util.ArrayList;
import java.util.Scanner;

public class TurnAmount {
    public static void main(String[] args) {
        char[] charArray = {'零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'};
        char[] charMoney = {'拾', '亿', '仟', '佰', '拾', '万', '仟', '佰', '拾', '元'};
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入数字\n");
        int amount = scanner.nextInt();
        String amountStr = String.valueOf(amount);
        int len = String.valueOf(amount).length();
        char[] trueStringArray = new char[charArray.length];
        String str = "1";
        for (int i = 0; i < charArray.length; i++) {
            if (i < len) {
                int index = Integer.parseInt(String.valueOf(amountStr.charAt(i)));
                // System.out.println(amountStr.charAt(i));
                // System.out.println(charArray[]);
                trueStringArray[charArray.length - len + i] = charArray[index];
            } else {
                trueStringArray[charArray.length - i - 1] = charArray[0];
            }
            // System.out.printf("%s\n", String.valueOf(amount).charAt(i));
        }
        String result = "";
        for (int i = 0; i < trueStringArray.length; i++) {
            result += trueStringArray[i] + "" + charMoney[i];
        }
        System.out.print(result);
        // System.out.println(len);
        // System.out.println(amount);
    }
}
