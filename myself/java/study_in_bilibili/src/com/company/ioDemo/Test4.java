package com.company.ioDemo;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

public class Test4 {
    private static final String PATH = "C:\\test\\c.txt";
    private static final String COPY_PATH = "C:\\test\\d.txt";
    public static void main(String[] args) throws IOException {
        // 字节流每次都是操作一个字节
        FileInputStream fis = new FileInputStream(PATH);
        FileOutputStream fos = new FileOutputStream(COPY_PATH);
        long start = System.currentTimeMillis();
        byte[] bytes = new byte[1024 * 1024 * 5];
        int len;
        while ((len = fis.read(bytes)) != -1) {
            fos.write(bytes, 0, len);
        }
        long end = System.currentTimeMillis();
        System.out.println(end - start);
        fos.close();
        fis.close();

        // 字符输出流
        // 根据字符集的编码方式进行编码，把编码之后的数据写到文件中去
        FileWriter fw = new FileWriter(PATH,true);
        fw.write("我");
        fw.close();
    }
}
