package com.company.exception;

public class exceptionDemo2 {
    public static void main(String[] args) {
        int[] arr = null;
        int max = getMax(arr);
        System.out.println(max);
    }

    public static int getMax(int[] arr) throws ArrayIndexOutOfBoundsException, NullPointerException {
        int max = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}
