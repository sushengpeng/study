package com.ioc.domain;

import com.ioc.dao.AccountDao;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class Account implements Serializable {
    private Integer user_id;
    private String name;
    private String password;

    public Account() {
    }

    public Account(Integer user_id, String name, String password) {
        this.user_id = user_id;
        this.name = name;
        this.password = password;
    }

}
