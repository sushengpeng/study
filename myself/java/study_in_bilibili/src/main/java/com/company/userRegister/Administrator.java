package com.company.userRegister;

public class Administrator extends People {
    public Administrator() {
        super.setAuth("管理员的权限");
    }

    public Administrator(String name, String id) {
        super(name, id, "管理员的权限");
    }
}
