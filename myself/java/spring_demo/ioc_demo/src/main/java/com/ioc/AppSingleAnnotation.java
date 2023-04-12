package com.ioc;

import com.ioc.config.SpringConfig;
import com.ioc.dao.impl.TodoListImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppSingleAnnotation {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        TodoListImpl todoList = ctx.getBean(TodoListImpl.class);
        System.out.println(todoList);
        ctx.close();
    }
}
