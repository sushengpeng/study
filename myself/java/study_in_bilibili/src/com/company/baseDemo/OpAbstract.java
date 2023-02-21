package com.company.baseDemo;

/**
 * 抽象类不能实例化
 * 抽象类中不一定有抽象方法，有抽象方法的类一定是抽象类
 * 可以有构造方法
 * 抽象类的子类
 *  要么重写抽象类中的所有抽象方法
 *  要么是抽象类
 */
public abstract interface OpAbstract {
    public abstract void work();
    public abstract void work1();
}
