package com.company.staticInnerClass;

/**
 * 1.什么是匿名内部类?
 *      隐藏了名字的内部类，可以写在成员位置，也可以写在局部位置
 * 2.匿名内部类的格式?
 *      new 类名或者接口名() {
 *          重写方法;
 *      }
 * 3.格式的细节
 *      包含了继承或实现，方法重写，创建对象。
 *      整体就是一个类的子类对象或者接口的实现类对象
 * 4.使用场景
 *      当方法的参数是接口或者类时
 *      以接口为例，可以传递这个接口的实现类对象
 *      如果实现类只要使用一次，就可以用匿名内部类简化代码
 */
public class StaticOuter {
    static int a = 111;
    static class Inner {
        static void show() {
            System.out.print("静态内部内方法");
        }
        void show1() {
            System.out.print("非静态内部内");
        }
    }

}
