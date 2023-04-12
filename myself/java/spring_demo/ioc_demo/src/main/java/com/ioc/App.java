package com.ioc;

import com.ioc.dao.BookDao;
import com.ioc.dao.UserDao;
import com.ioc.service.BookService;
import com.ioc.service.impl.BookServiceImpl;
import com.ioc.service.impl.GatherServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.awt.print.Book;

public class App {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        ctx.registerShutdownHook();
        GatherServiceImpl gatherServiceImpl = (GatherServiceImpl) ctx.getBean("GatherServiceImpl");
        gatherServiceImpl.printItem();

    }
}