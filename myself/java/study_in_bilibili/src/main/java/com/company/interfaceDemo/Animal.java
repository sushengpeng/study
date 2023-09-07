package com.company.interfaceDemo;

/**
 * 成员变量
 *      只能是常量
 *      默认修饰符public static final
 * 构造方法
 *      没有
 * 成员方法
 *      只能是抽象方法
 *      默认修饰符public abstract
 */

/**
 * 类和类的关系
 *      继承关系，只能单继承，不能多继承，但是可以多层
 * 继承类和接口的关系
 *      实现关系，可以单实现，也可以多实现，还可以在继承一个类的同时实现多个接口
 * 接口和接口的关系
 *      继承关系，可以单继承，也可以多继承t
 */

/**
 * 允许在接口中定义默认方法，需要使用关键字 default 修饰
 *      作用: 解决接口升级的问题
 * 接口中默认方法的定义格式:
 *      格式: public default 返回值类型方法名(参数列表){}
 *      范例: public default void show(){}
 * 接口中默认方法的注意事项
 *      默认方法不是抽象方法，所以不强制被重写。但是如果被重写，重写的时候去掉default关键字
 *      public可以省略，default不能省略
 *      如果实现了多个接口，多个接口中存在相同名字的默认方法，子类就必须对该方法进行重写
 */
public class Animal {
    private String name;
    private int age;

    public Animal() {
    }

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void eat(String something) {
        System.out.println(name + "吃" + something);
    }
}
