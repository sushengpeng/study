package com.company.bigDecimalDemo;

import java.math.BigDecimal;

/**
 * 类型       占用字节数   总bit位数  小数部分bit位数
 * float      4个字节     32个bit位  23个bit位
 * double     8个字节     64个bit位  52个bit位
 */
public class BigDecimalDemo {
    public static void main(String[] args) {
        BigDecimal bd1 = new BigDecimal(0.01);
        BigDecimal bd2 = new BigDecimal(0.09);
        // System.out.println(bd1); //0.01000000000000000020816681711721685132943093776702880859375
        // System.out.println(bd2); //0.0899999999999999966693309261245303787291049957275390625
        BigDecimal bd3 = new BigDecimal("0.01");
        BigDecimal bd4 = new BigDecimal("0.09");
        System.out.println(bd3);
        System.out.println(bd4);
        BigDecimal bd5 = BigDecimal.valueOf(9);
        BigDecimal bd6 = BigDecimal.valueOf(9);
        System.out.println(bd5 == bd6); //true
    }
}
