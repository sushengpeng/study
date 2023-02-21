package com.company.brand;

import java.math.BigDecimal;

public class BrandTest {
    public static void main(String[] args) {
        Brand brand1 = new Brand("品牌1",222,"#cccccc");
        Brand brand2 = new Brand("品牌1",111,"#cccccc");
        Brand brand3 = new Brand("品牌1",4222,"#cccccc");
        Brand[] arr = new Brand[3];
        arr[0] = brand1;
        arr[1] = brand2;
        arr[2] = brand3;
        BigDecimal avg = BigDecimal.valueOf(0);
        System.out.println(avg);
        for (int i = 0; i < arr.length; i++) {
            avg =BigDecimal.valueOf((avg.doubleValue() + arr[i].getPrice() * 1.0)/arr.length);
        }
        System.out.println(avg);
    }
}
