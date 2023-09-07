package com.company.baseDemo;

public class GoodsTest {
    public static void main(String[] args) {
        Goods[] arr = new Goods[3];
        Goods g1 = new Goods("苏联空军发","001",22.2,1111);
        Goods g2 = new Goods("数量的空间","002",1212.3,22);
        Goods g3 = new Goods("啊发发","003",21412.2,333);
        arr[0] = g1;
        arr[1] = g2;
        arr[2] = g3;
        // arr.fori
        for (Goods goodItem : arr) {
            System.out.printf("%S\n", goodItem.getName());
        }
    }
}
