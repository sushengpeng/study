package com.company.extendsDemo;

public class Erha extends Dog {
    public Erha(String name) {
        super(name);
        this.pushers();
    }

    public void pushers() {
        System.out.printf("%s会拆家\n", name);
    }
}
