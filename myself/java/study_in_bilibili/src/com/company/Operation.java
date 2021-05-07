package com.company;

import java.util.Arrays;
import java.util.Scanner;

/**
 * @param null
 * @author flygg123
 * @date 2021/3/22 22:30
 */
public class Operation {
    public static void main(String[] args) {
//        outPrint();
//        add7();
        homework2();
    }

    //打印出 *
    public static void outPrint() {
        Scanner s = new Scanner(System.in);
        int i = 0;
        int j = s.nextInt();
        while (i < j) {
            int stringLength = i * 2 + 1;
            String str = "";
            for (int z = 0; z < stringLength; z++) {
                str = str.concat("*");
            }
            System.out.println(str);
            i++;
        }
    }

    // 计算1000内不能被7整除的整数的和
    public static void add7() {
        int sum = 0;
        int total = 1000;
        for (int i = 1; i <= total; i++) {
            if (i % 7 != 0) {
                sum += i;
            }
        }
        System.out.println(sum);
    }

    public static void homework2() {
        int total = 100;
        int sum = 0;
        String str = "";
        for (int i = 1; i <= total; i++) {
            if (i > 1 && i % 2 == 1) {
                str =str.concat("-").concat(String.valueOf(i));
                sum -= i;
            } else {
                str =str.concat("+").concat(String.valueOf(i));
                sum += i;
            }
        }
        System.out.println(str);
    }
}
