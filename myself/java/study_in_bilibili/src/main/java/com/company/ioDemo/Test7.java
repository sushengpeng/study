package com.company.ioDemo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Test7 extends TestPath {
    public static void main(String[] args) throws IOException {
        File src = new File(PATH);
        File output = new File(COPY_PATH);
        copySrc(src, output);
    }

    private static void copySrc(File src, File output) throws IOException {
        output.mkdirs();
        File[] files = src.listFiles();
        for (File file : files) {
            if (file.isFile()) {
                FileInputStream fis = new FileInputStream(file);
                FileOutputStream fos = new FileOutputStream(new File(COPY_PATH, file.getName()));
                byte[] bytes = new byte[1024];
                int len;
                while ((len = fis.read(bytes)) != -1) {
                    fos.write(bytes, 0, len);
                }
                fos.close();
                fis.close();
            } else {
                copySrc(file,new File(COPY_PATH, file.getName()));
            }
        }
    }
}
