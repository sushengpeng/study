package com.company.student;

public class StudentListTest {
    public static void main(String[] args) {
        StudentList list = new StudentList();
        Student student1 = new Student(1,"李梓萌", 18);
        Student student2 = new Student(2,"王子案", 19);
        Student student3 = new Student(3,"宇安爱", 16);
        list.setStudentList(student1);
        list.setStudentList(student2);
        list.setStudentList(student3);
        list.getAllStudentList();
        list.delStudentById(0);
        list.updateStudentById(2);
        // System.out.print(list);
        // System.out.print("\n");
        // int size = list.getStudentList().size();
        // for (int i = 0; i < size; i++) {
        //     Student s = list.getStudentList().get(i);
        //     System.out.printf("学生姓名为%s\n",s.getName());
        // }
        // for (Student student : list.getStudentList()) {
        //     System.out.println(student.getName());
        // }
    }
}
