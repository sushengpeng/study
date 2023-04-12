package com.ioc.dao.impl;

import com.ioc.dao.Todo;
import lombok.Data;
import org.springframework.stereotype.Component;

@Data
public class TodoImpl implements Todo {
    private String name;
    private String id;

    public TodoImpl(String name, String id) {
        this.name = name;
        this.id = id;
    }
}
