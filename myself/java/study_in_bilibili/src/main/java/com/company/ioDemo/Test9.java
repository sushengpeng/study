package com.company.ioDemo;

import java.io.*;

public class Test9 {
    private static final String PATH = "C:\\test\\d.txt";
    private static final String COPY_PATH = "C:\\test\\e.txt";

    public static void main(String[] args) throws IOException {
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream(PATH));
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(COPY_PATH));
        int b;
        while ((b = bis.read()) != -1) {
            bos.write(b);
        }
        bos.close();
        bis.close();
    }
}
