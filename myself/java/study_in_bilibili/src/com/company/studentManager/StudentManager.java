package com.company.studentManager;

import java.util.Scanner;

public class StudentManager {
    public static void main(String[] args) {
        String menu = new Menu().getMenu();
        boolean isFlag = true;
        StudentList studentList = new StudentList();
        while (isFlag) {
            Scanner scanner = new Scanner(System.in);
            System.out.print(menu);
            int choice = scanner.nextInt();
            // System.out.println(choice);
            switch (choice) {
                case 1:
                    // System.out.println("新增学生");
                    add(studentList);
                    break;
                case 2:
                    del(studentList);
                    break;
                    // System.out.println("删除学生");
                case 3:
                    update(studentList);
                    break;
                    // System.out.println("修改学生");
                case 4:
                    findStudent(studentList);
                    break;
                case 5:
                    System.out.println("系统退出");
                    isFlag = false;
                default:
                    System.out.println("输入有误请重新输入");
            }

        }
    }
    public static Student inputStudent(boolean isAdd) {
        String text = isAdd ? "添加" : "修改";
        Scanner scannerId = new Scanner(System.in);
        System.out.printf("请输入要%s的学生id：",text);
        String id = scannerId.next();
        Scanner scannerName = new Scanner(System.in);
        System.out.printf("请输入要%s的学生姓名：",text);
        String name = scannerName.next();
        Scanner scannerAge = new Scanner(System.in);
        System.out.printf("请输入要%s的学生年龄：",text);
        int age = scannerName.nextInt();
        Scanner scannerAddress = new Scanner(System.in);
        System.out.printf("请输入要%s的学生地址：",text);
        String address = scannerName.next();
        Student student = new Student(id, name, age, address);
        return student;
    }
    public static void add(StudentList studentList) {
        boolean flag = true;
        while (flag) {
            Student student = inputStudent(true);
            flag = !studentList.addStudent(student);
        }
    }

    public static void del(StudentList studentList) {
        boolean flag = true;
        while (flag) {
            Scanner scanner = new Scanner(System.in);
            System.out.printf("请输入要删除的学生id：");
            String id = scanner.next();
            flag = !studentList.removeStudent(id);
        }
    }

    public static void update(StudentList studentList) {
        boolean flag = true;
        while (flag) {
            Student student = inputStudent(false);
            flag = !studentList.updateStudent(student);
            studentList.printStudentList();
        }
    }

    public static void findStudent(StudentList studentList) {
        boolean flag = false;
        while (!flag) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("请输入你要查询的学生id：");
            String id = scanner.next();
            Student student = studentList.checkStudent(id);
            if (student.getId() != null) {
                flag = true;
                student.print();
            }
        }
    }
}
