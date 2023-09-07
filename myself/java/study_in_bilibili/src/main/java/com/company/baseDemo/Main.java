package com.company.baseDemo;

/**
 * @author flygg123
 */

public class Main {
    //类体中不允许直接编写java语句除了声明变量除外
    //static表示静态 void表示空 public表示公开
    //一个java文件中可以定义多个class,一个class会生成一个.class文件
    //快速生成注解的先输入/** +enter
    //一个java源文件中public class只能有一个 且名字必须跟文件名保持一致

    static int i = 1111;

    public static void main(String[] args) {//表示公开一个静态的主方法
        // write your code here
        int i = -1;
        System.out.println(i/2);
        System.out.println("java的第一个程序");

    }

    class A {
        public void main(String[] args) {//表示公开一个静态的主方法
            // write your code here
            System.out.println("执行A");
            System.out.println(i);
        }
    }

    class B {
        public void main(String[] args) {//表示公开一个静态的主方法
            // write your code here
            System.out.println("执行B");
        }
    }

    class C {
        public void main(String[] args) {//表示公开一个静态的主方法
            // write your code here
            System.out.println("执行C");
        }
    }
}
