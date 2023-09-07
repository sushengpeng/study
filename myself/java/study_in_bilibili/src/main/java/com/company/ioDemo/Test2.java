package com.company.ioDemo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Test2 {
    private static final String PATH = "C:\\test\\D.txt";
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream(PATH);
        byte[] bytes = fis.readAllBytes();
        // System.out.println(fis.read());
        // System.out.println(fis.read());
        // System.out.println(fis.read());
        System.out.println(fis.read());
        // System.out.println(fis.read());
        // System.out.println();
    }
}
