package com.company.methodsImport;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Test3 {
    public static void main(String[] args) {
        ArrayList<Student> studentList = new ArrayList<>();
        studentList.add(new Student("st1",11));
        studentList.add(new Student("st2",22));
        studentList.add(new Student("st3",33));
        studentList.add(new Student("st4",44));
        studentList.add(new Student("st5",55));
        List<String> collect = studentList.stream().map(new Student()::nameJoinAge).collect(Collectors.toList());
        System.out.println(collect);
    }
}
