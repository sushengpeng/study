package com.company.employeeDemo;

public class Employee {
    private String id;
    private String name;

    public Employee() {
    }

    public Employee(String id, String name) {
        this.id = id;
        this.name = name;
    }
    public void work() {
        System.out.println("在工作");
    }
}
