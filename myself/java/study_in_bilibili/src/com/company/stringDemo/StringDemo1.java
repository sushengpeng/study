package com.company.stringDemo;

public class StringDemo1 {
    public static void main(String[] args) {
        // 1、通过直接赋值的方式获取一个字符串对象
        // 通过直接赋值创建的会先通过stringTable（串池）中查找 若存在将地址直接赋给新创建的对象
        String s1 = "abc";
        System.out.println(s1);
        // 2、通过new方式来获取一个字符串对象
        String s2 = new String();
        System.out.println("@" + s2 + "!");
        // 3、传递一个字符串创建
        String s3 = new String("abd");
        System.out.println(s3);
        // 4、通过传递一个字符数组，根据字符数组的内容再创建一个新的字符串对象
        // 如果以后需要修改字符串对象 abc -> { 'a','b','c'' } -> { 'A','b','c' } =>Abc
        char[] sList = {'a', 'b', 'c', 'd', 'e', 'f'};
        String s4 = new String(sList);
        System.out.println(s4);
        // 5、通过传递一个字节数组，根据字节数组的内容再创建一个新的字符串对象
        // 以后再网络上传输的数据都是字节信息
        // 只要有new 出来的就会在执行的时候在栈内存中开辟一个小空间
        byte[] bytes = {97, 98, 99};
        String s5 = new String(bytes);
        System.out.println(s5);
    }
}
