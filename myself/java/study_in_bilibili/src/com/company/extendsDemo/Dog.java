package com.company.extendsDemo;
/*
1.重写方法的名称、形参列表必须与父类中的一致
2.子类重写父类方法时，访问权限子类必须大于等于父类3.子类重写父类方法时，返回值类型子类必须小于等于父类
4.建议:重写的方法尽量和父类保持一致。
5.只有被添加到虚方法表中的方法才能被重写（不被finnal private static）
 */

/**
 * this 调用 就近原则
 * super 调用 直接找父类
 * @ouerride 表示方法重写 （只有虚方法里面的方法可以被重写 返回要小于等于父类）
 */
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
        this.lookDoor();
    }

    public void lookDoor() {
        System.out.printf("%s会看家\n", name);
    }
}
