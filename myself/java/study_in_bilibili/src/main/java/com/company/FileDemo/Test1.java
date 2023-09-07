package com.company.FileDemo;

import java.io.File;
import java.io.FileFilter;
import java.io.FilenameFilter;
import java.util.Arrays;

public class Test1 {
    public static void main(String[] args) {
        File[] arr = File.listRoots();
        // System.out.println(arr);
        for (File file : arr) {
            // System.out.println(file);
            // System.out.println(file.length());
        }
        File files = new File("D:\\");
        File[] fileList = files.listFiles(new FileFilter() {
            @Override
            public boolean accept(File pathname) {
                return pathname.getName().endsWith(".lnk");
            }
        });
        File[] fileList1 = files.listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                // System.out.println(dir);
                return name.endsWith(".lnk");
            }
        });
        System.out.println(Arrays.toString(fileList));
    }
}
