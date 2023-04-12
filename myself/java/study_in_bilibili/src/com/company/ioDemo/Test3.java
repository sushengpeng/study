package com.company.ioDemo;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Test3 {
    private static final String PATH = "C:\\test\\c.txt";
    private static final String COPY_PATH = "C:\\test\\d.txt";
    public static void main(String[] args) throws IOException, InterruptedException {
        FileOutputStream fos = new FileOutputStream(COPY_PATH);
        FileInputStream fis = new FileInputStream(PATH);
        int i = 0;
        while ((i = fis.read()) != -1) {
            fos.write(i);
        }
        fis.close();
        fos.close();
    }
}
