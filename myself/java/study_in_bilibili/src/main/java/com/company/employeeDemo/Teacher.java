package com.company.employeeDemo;

public class Teacher extends Employee{
    public Teacher() {
    }

    public Teacher(String id, String name) {
        super(id, name);
    }

    @Override
    public void work() {
        // super.work();
        System.out.println("讲课");
    }
}
