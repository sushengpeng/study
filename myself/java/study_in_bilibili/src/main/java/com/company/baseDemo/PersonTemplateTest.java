package com.company.baseDemo;

public class PersonTemplateTest {
    public static void main(String[] args) {
        PersonTemplate zhangsan = new PersonTemplate("zhangsan",1000,'男');
        PersonTemplate lisi = new PersonTemplate("lisi",2000,'女');
        zhangsan.action(lisi);
    }
}
// psvm