package com.company.exception;

public class exceptionDemo1 {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 6};
        try {
            System.out.println(arr[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("打印报错");
            e.printStackTrace();
        }
    }
}
