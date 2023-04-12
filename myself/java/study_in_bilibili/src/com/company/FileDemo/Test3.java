package com.company.FileDemo;

import java.io.File;

public class Test3 {
    public static void main(String[] args) {
        File root = new File("C:\\test");
        File[] files = root.listFiles();
        for (File file : files) {
            boolean equals = file.getName().equals("a.txt");
            if(equals) System.out.println(file.getName());
        }

    }
}
