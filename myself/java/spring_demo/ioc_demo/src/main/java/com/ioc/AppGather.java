package com.ioc;

import com.ioc.dao.BookDao;
import com.ioc.dao.impl.ImportPropertiesImpl;
import com.ioc.service.BookService;
import com.ioc.service.impl.GatherServiceImpl;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AppGather {
    public static void main(String[] args) {
        // System.out.println("Hello world!");
        // BookService bookService = new BookServiceImpl();
        // bookService.save();
        // 获取ioc容器
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        ctx.registerShutdownHook();
        BookDao bookDao =(BookDao) ctx.getBean("bookDao");
        // bookDao.save();
        BookService bookService = (BookService) ctx.getBean("bookService");
        BookService bookService1 = (BookService) ctx.getBean("bookService");
        ctx.close();
        // bookService.save();
        // System.out.println(bookService);
        // System.out.println(bookService1);
        // UserDao userDao = (UserDao) ctx.getBean("UserDao");
    }
}