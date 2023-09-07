package com.company.staticDemo;

import java.util.ArrayList;

/*
javabean类用来描述一类事物的类。比如，student，Teacher，Dog，Cat等
测试类用来检查其他类是否书写正确，带有main方法的类，是程序的入口
工具类不是用来描述一类事物的，而是帮我们做一些事情的类
*/
/*
    static注意事项
    静态方法中，只能访问静态。
    非静态方法可以访问所有。
    静态方法中没有this关键字
 */
public class StudentTest {
    public static void main(String[] args) {
        Student student1 = new Student("李梓萌", 28, '男');
        Student.teacherName = "阿拉丁";
        student1.study();
        student1.show();
        Student student2 = new Student("填进宗", 26, '男');
        student2.study();
        student2.show();
        Student student3 = new Student("阿萨大", 28, '男');
        ArrayList<Student> studentList = new ArrayList<Student>();
        studentList.add(student1);
        studentList.add(student2);
        studentList.add(student3);
        int max = StudentUtils.getStudentAgeMax(studentList);
        System.out.println(max);
    }
}
