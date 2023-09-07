package com.company.stringDemo;

import java.util.StringJoiner;

/*
给定两个字符串A和B
A的旋转操作就是将A最左边的字符移动到最右边。
例如，若A='abcde'，在移动一次之后结果就是'bcdea'
如果在若干次调整操作之后，A能变成B，那么返回True如果不能匹配成功，则返回false
*/
public class Test2 {
    public static void main(String[] args) {
        String strA = "abcde";
        String strB = "bcdea";
        boolean flag = checkStr(strA, strB);
        if (flag) {
            System.out.println("匹配成功");
        }
    }

    public static boolean checkStr(String strA, String strB) {
        StringJoiner sj = new StringJoiner("");
        sj.add(strA).add(strA);
        String checkStrA = sj.toString();
        System.out.println(checkStrA);
        return checkStrA.contains(strB);
    }
}
