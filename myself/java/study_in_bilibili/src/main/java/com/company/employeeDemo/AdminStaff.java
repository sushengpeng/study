package com.company.employeeDemo;

public class AdminStaff extends Employee{
    public AdminStaff() {
    }

    public AdminStaff(String id, String name) {
        super(id, name);
    }

    @Override
    public void work() {
        // super.work();
        System.out.println("行政部员工");
    }
}
