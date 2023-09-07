package com.company.ioDemo;

import java.io.FileWriter;
import java.io.IOException;

public class Test6 {
    private static final String PATH = "C:\\test\\d.txt";
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter(PATH, true);
        fw.write("阿联军的开发");
        fw.write("啊我皮肤");
        fw.flush();
        fw.write("考虑进来");
        fw.write("哦IP");
        fw.close();
    }
}
