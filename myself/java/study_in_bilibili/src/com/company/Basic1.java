package com.company;

/**
 * @author flygg123
 * 1、标识符命名的规则
 * 只能由字母、数字、下划线、美元符号组成，不能含有其他特殊符号
 * 不能以数字开头
 * 严格区分大小写
 * 不能以关键字做标识符
 * 2、标识符的命名规范
 * 最好见名知意
 * 遵守驼峰命名方式
 * 类名、接口名：首字母小写，后面每个单词首字母大写
 * 常量名：全部大写
 * 3、字面值
 * java中所有的字符串型字面量必须用双引号括起来
 * 字符型            单引号
 * 4、基本数据类型
 * 第一类： 整数型 byte,short,int,long
 * 第二类： 浮点型 float,double
 * 第三类： 布尔型 boolean
 * 第四类： 字符型 char
 * 5、八种基本数据类型各自占用空间大小是多少
 * byte                     1 -128~127
 * short                    2
 * int                      4 -2147483648~2147483647
 * long                     8
 * float                    4
 * double                   8
 * boolean                  1
 * char                     2
 */
public class Basic1 {
    static int i = 999;
    static String a = "Hello java";
    static char e;

    public static void main(String[] args) {
        System.out.println(i);
        //doSome(a);
        intDemo();
        charDemo();
        byteDemo();
        shortDemo();
    }

    public static void doSome(String str) {
        int a = 1;
        int b = 2;
        //反斜杠将后面的单引号转义成不具备特殊含义的普通单引号字节
        char c = '\\';
        System.out.println(a);
        System.out.println(c);
        System.out.println(b);
        System.out.println("’lskkfdjsl‘");
        System.out.println("\"helloWorld\"");
        //中 对应的unicode编码
        char d = '\u4e2d';
        System.out.println(d);
        if (e == '\u0000') {
            System.out.println(1111);
        }
    }

    public static void intDemo() {
        /*
        整数型字面量有三种表达方式
        1、二进制 jdk8之后支持 需要0b开头 0b10
        2、十进制 是一种缺省默认的方式
        3、八进制 需要以0开头 010
        3、十六精致 需要以0x开头 0x10
        整数型数据再赋值之前会自动被当做int数据类型来处理当最大值超过2147483647时 会报错
        过大的整数: 2147483648
        需要在后面加L让它被当成long类型
        4、大容量如果想转换成小容量，必须加强制类型转换符，加强制类型转化符之后可能存在精度丢失
         */
        int a = 10;
        int b = 010;
        int c = 0x10;
        int d = 0b10;
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        long e = 2147483648L;
        int f = (int) e;
        System.out.println(f);
    }

    public static void charDemo() {
        char a = 98;
        char b = 65535;
        // char c = 65536;
        //b
        System.out.println(a);
        //未知符号
        System.out.println(b);
        // System.out.println(c); //报错 从int转换到char可能会有损失 超出最大值的范围
    }

    public static void byteDemo() {
        byte a = (byte) 150;
        /*
        byte a = -1;
        对应的原码是10000001
        对应的二进制反码是（符号位不变，其他位取反）11111110
        对应的二进制补码是（反码+1）11111111
        计算机存储的永远是补码
        byte 150 输出的是-106
         */
        System.out.println(a);
    }

    public static void shortDemo(){
        char a = 'a';
        byte b = 1;
        System.out.println(a + b);
    }
}
