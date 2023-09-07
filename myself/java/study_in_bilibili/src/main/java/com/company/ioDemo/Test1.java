package com.company.ioDemo;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Test1 {
    public static void main(String[] args) {
        try {
            FileOutputStream fops = new FileOutputStream("C:\\test\\c.txt");
            String a = "111a;dlafka;faklas;dflksaf";
            byte[] bytes = a.getBytes();
            fops.write(bytes); // ascii码值a
            fops.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
}
