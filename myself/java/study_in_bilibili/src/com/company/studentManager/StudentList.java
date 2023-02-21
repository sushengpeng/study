package com.company.studentManager;

import java.util.ArrayList;

public class StudentList {
    private ArrayList<Student> studentList;

    public ArrayList<Student> getStudentList() {
        return studentList;
    }

    public StudentList() {
        this.studentList = new ArrayList<Student>();
    }

    public boolean addStudent(Student student) {
        boolean flag = this.checkHasStudent(student.getId());
        if (flag) {
            System.out.println("您输入的学生存在，请重新输入");
            return false;
        } else {
            studentList.add(student);
            this.printStudentList();
            return true;
        }
    }

    public boolean updateStudent(Student student) {
        ArrayList<Student> newStudentList = new ArrayList<Student>();
        boolean flag = false;
        for (Student s : studentList) {
            if (s.getId().equals(student.getId())) {
                flag = true;
                newStudentList.add(student);
            } else {
                newStudentList.add(s);
            }
        }
        System.out.println(flag ? "更新成功" : "更新失败，请重新输入");
        return flag;
    }

    public boolean removeStudent(String id) {
        ArrayList<Student> newStudentList = new ArrayList<Student>();
        for (Student student : studentList) {
            if (!student.getId().equals(id)) {
                newStudentList.add(student);
            }
        }
        if (newStudentList.size() == this.studentList.size()) {
            System.out.println("删除失败，当前id不存在");
            return false;
        } else {
            this.studentList = newStudentList;
            System.out.println("删除成功");
            this.printStudentList();
            return true;
        }
    }

    public boolean checkHasStudent(String id) {
        boolean flag = false;
        for (Student student : studentList) {
            if (student.getId().equals(id)) {
                flag = true;
            }
        }
        return flag;
    }
    public Student checkStudent(String id) {
        Student s = new Student();
        for (Student student : studentList) {
            if (student.getId().equals(id)) {
                s = student;
            }
        }
        return s;
    }
    public void printStudentList() {
        System.out.printf("%s       %s       %s       %s\n", "id", "姓名", "年龄", "地址");
        for (Student student : studentList) {
            System.out.printf("%s       %s       %s       %s\n", student.getId(), student.getName(), student.getAge(), student.getAddress());
        }
    }
}
