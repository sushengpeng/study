package com.company.ioDemo;

import java.io.FileInputStream;
import java.io.IOException;

public class Test11 extends TestPath{
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream(TEXT_C);
        int a;
        while((a = fis.read()) != -1) {
            System.out.print((char)a);
        }
        fis.close();
    }
}
