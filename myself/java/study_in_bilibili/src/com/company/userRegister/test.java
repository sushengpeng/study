package com.company.userRegister;

/**
 * 1.什么是多态?
 * 对象的多种形态
 * 2.多态的前提?
 * 有继承/实现关系
 * 有父类引用指向子类对象
 * 有方法的重写
 * 3.多态的好处?
 * 使用父类型作为参数，可以接收所有子类对象
 * 4.多态的弊端
 * 不能调用子类特有的功能
 * 在编译的时候会看左边的父类中有没有对应的方法，如果没有，直接报错
 */

/**
 * 成员变量:在子类的对象中，会把父类的成员变量也继承下的。父: name 子: name
 * 成员方法:如果子类对方法进行了重写，那么在虚方法表中是会把父类的方法进行覆盖的。
 */
public class test {
    public static void main(String[] args) {
        Student student1 = new Student("李梓萌","001");
        Teacher teacher1 = new Teacher("王宇轩","teacher_001");
        Administrator admin1 = new Administrator("管理员","admin_001");
        testClass(student1);
        testClass(teacher1);
        testClass(admin1);
    }
    public static void testClass(People p) {
        p.show();
    }
}
