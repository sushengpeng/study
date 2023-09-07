package com.company.userRegister;

public class People {
    private String name;
    private String id;
    private String auth;

    public People() {
    }

    public People(String name, String id, String auth) {
        this.name = name;
        this.id = id;
        this.auth = auth;
    }

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        auth = auth;
    }

    public void show() {
        System.out.printf("%s,%s,%s\n", id, name, auth);
    }
}






