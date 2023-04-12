package com.company.ioDemo;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Test5 {
    private static final String PATH = "C:\\test\\c.txt";
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader(PATH);
        char[] c = new char[2];
        int read = fr.read(c);
        System.out.println(read);
        fr.close();
    }
}
