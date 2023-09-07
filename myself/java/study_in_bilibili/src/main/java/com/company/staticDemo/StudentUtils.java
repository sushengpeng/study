package com.company.staticDemo;

import java.util.ArrayList;

public class StudentUtils {
    private StudentUtils() {}
    public static int getStudentAgeMax(ArrayList<Student> list) {
        int max = 0;
        for (Student student : list) {
            if(student.getAge() > max) {
                max = student.getAge();
            }
        }
        return max;
    }
}
