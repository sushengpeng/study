package com.ioc.dao.impl;

import com.ioc.dao.TodoList;
import lombok.Data;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.ArrayList;

@Component
@Data
@Scope("singleton")
public class TodoListImpl implements TodoList {
    private ArrayList<TodoImpl> todoList;

    public TodoListImpl() {
        this.todoList = new ArrayList<>();
    }

    @Override
    public void addTodo(TodoImpl todoItem) {
        todoList.add(todoItem);
    }

    @PostConstruct
    public void init() {
        System.out.println("init --------------------");
    }

    @PreDestroy
    public void destroy() {
        System.out.println("destroy --------------------");
    }
}
