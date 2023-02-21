package com.company.student;

import java.util.ArrayList;

/*
定义一个长度为3的数组，数组存储1~3名学生对象作为初始数据，学生对象的学号，姓名各不相同学生的属性:学号，姓名，年龄。
要求1:再次添加一个学生对象，并在添加的时候进行学号的唯一性判断
要求2:添加完毕之后，遍历所有学生信息。
要求3:通过id删除学生信息 如果存在，则删除，如果不存在，则提示删除失败
要求4:删除完毕之后，遍历所有学生信息。
要求5:查询数组id为“heima002”的学生，如果存在，则将他的年龄+1岁
*/
public class StudentList {
    private ArrayList<Student> StudentList;

    public StudentList() {
        this.init();
    }

    public ArrayList<Student> getStudentList() {
        return StudentList;
    }

    public void init() {
        this.StudentList = new ArrayList<Student>();
    }

    public void setStudentList(Student student) {
        if (this.StudentList.isEmpty()) {
            this.StudentList.add(student);
        } else {
            // int size = this.StudentList.size();
            // for (int i = 0; i < size; i++) {
            //     Student s = this.StudentList.get(i);
            //     if (s.getId() == student.getId()) {
            //         System.out.printf("当前已经存在%s学生", student.getName());
            //         break;
            //     } else {
            //         this.StudentList.add(student);
            //         break;
            //     }
            // }
            boolean hasStudent = false;
            for (Student s : this.StudentList) {
                if (s.getId() == student.getId()) {
                    hasStudent = true;
                    System.out.printf("当前已经存在%s\n", student.getName());
                    break;
                }
            }
            if (!hasStudent) {
                this.StudentList.add(student);
            }
        }
        // StudentList = studentList;
    }

    public void getAllStudentList() {
        for (Student student : StudentList) {
            System.out.printf("id：%s，姓名：%s，年龄：%s\n", student.getId(), student.getName(), student.getAge());
        }
    }

    public void updateStudentById(int id) {
        for (Student student : StudentList) {
            if (student.getId() == id) {
                student.setAge(student.getAge() + 1);
                System.out.println("更新成功");
                getAllStudentList();
                break;
            }
        }
    }

    public void delStudentById(int id) {
        boolean hasDel = StudentList.removeIf(student -> student.getId() == id);
        if (hasDel) {
            System.out.println("删除成功");
            getAllStudentList();
        } else {
            System.out.println("删除失败");
        }
        // for (Student student : StudentList) {
        //     if(student.getId() == id) {
        //         StudentList.remove(student);
        //     }
        // }
    }

    public static void main(String[] args) {

    }
}
