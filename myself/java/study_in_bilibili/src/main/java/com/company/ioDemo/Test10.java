package com.company.ioDemo;

import java.io.*;

public class Test10 {
    private static final String PATH = "C:\\test\\d.txt";
    private static final String COPY_PATH = "C:\\test\\f.txt";

    public static void main(String[] args) {
        FileInputStream fis = null;
        FileOutputStream fos = null;
        try {
            fis = new FileInputStream(PATH);
            fos = new FileOutputStream(COPY_PATH);
            int len;
            byte[] bytes = new byte[1024 * 1024 * 5];
            while((len = fis.read(bytes)) != -1) {
                fos.write(bytes, 0, len);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            try {
                fos.close();
                fis.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}