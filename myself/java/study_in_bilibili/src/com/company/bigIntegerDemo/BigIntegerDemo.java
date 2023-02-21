package com.company.bigIntegerDemo;

import java.math.BigInteger;

/**
 * 如果BigInteger表示的数字没有超出long的范围，可以用静态方法获取。
 * 果BigInteger表示的超出long的范围，可以用构造方法获取
 * 对象一旦创建，BigInteger内部记录的值不能发生改变
 * 只要进行计算都会产生一个新的BigInteger对象
 */
public class BigIntegerDemo {
    public static void main(String[] args) {
        BigInteger bigInteger1 = BigInteger.valueOf(16);
        BigInteger bigInteger2 = BigInteger.valueOf(16);
        System.out.println(bigInteger2 == bigInteger1);
        BigInteger bigInteger3 = BigInteger.valueOf(16);
        BigInteger bigInteger4 = BigInteger.valueOf(18);
        System.out.println(bigInteger3 == bigInteger4);
        // System.out.println(Long.MAX_VALUE); //9223372036854775807
        // BigInteger bigInteger5 = BigInteger.valueOf(9223372036854775808L);
        BigInteger bigInteger5 = new BigInteger("9223372036854775808");
    }
}
