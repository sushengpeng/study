package com.company.FileDemo;

import java.io.File;

public class Test4 {
    public static void main(String[] args) {
        File file = new File("C:\\test");
        File[] files = file.listFiles();
        boolean hasFile = checkFolderHasFile(files, "b.avi");
        if (hasFile) {
            System.out.println("该目录当中存在该文件");
        } else {
            System.out.println("该目录当中不存在该文件");
        }
    }

    public static boolean checkFolderHasFile(File[] file, String filename) {
        boolean hasFile = false;
        for (File listFile : file) {
            if (listFile.isDirectory()) {
                return checkFolderHasFile(listFile.listFiles(), filename);
            } else if (listFile.getName().equals(filename)) {
                // listFile.delete();
                hasFile = true;
                break;
            }
        }
        return hasFile;
    }
}
