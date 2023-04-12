package com.ioc;

import com.ioc.dao.impl.TodoImpl;
import com.ioc.dao.impl.TodoListImpl;
import com.ioc.service.BookService;
import com.ioc.service.impl.BookServiceImpl;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AppAnnotation {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("annotationProperties.xml");
        TodoListImpl todoList = ctx.getBean(TodoListImpl.class);
        TodoImpl todoImpl = new TodoImpl("1","2");
        System.out.println(todoImpl);
        todoList.addTodo(todoImpl);
        System.out.println(todoList);
        BookService bookService = ctx.getBean(BookService.class);
        bookService.save();

    }
}
