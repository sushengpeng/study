package com.company.extendsDemo;

public class Taidi extends Dog {
    public Taidi(String name) {
        super(name);
        this.ceng();
    }

    public void ceng() {
        System.out.printf("%s会蹭一蹭\n", name);
    }
}
