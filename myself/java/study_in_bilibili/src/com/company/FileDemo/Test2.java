package com.company.FileDemo;

import java.io.File;
import java.io.IOException;

public class Test2 {
    public static void main(String[] args) throws IOException {
        File file = new File("C:\\test\\aaa\\b.avi");
        System.out.println(file.getParent());
        new File(file.getParent()).mkdir();
        boolean newFile = file.createNewFile();
        System.out.println(newFile);
    }
}
